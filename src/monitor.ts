import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';

import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';

import { Construct } from 'constructs';

export class FsxLifecycleStatusMonitor extends Construct {
  fn: lambda.Function;
  topic: sns.Topic;
  policy: iam.Policy;
  rule: events.Rule;

  /**
   * Creates an instance of FsxLifecycleStatusMonitor.
   * @param {Construct} scope - parent construct
   * @param {string} id - unique id
   * @memberof FsxLifecycleStatusMonitor - class instance
   */
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.topic = this.createSNSTopic();
    this.policy = this.createIamPolicy();
    this.fn = this.createLambdaFunction();
    this.fn.role?.attachInlinePolicy(this.policy);

    this.rule = new events.Rule(this, 'rule', {
      ruleName: 'fsx-health-trigger',
      description: 'Trigger the FSx health check every 10 minutes',
      schedule: events.Schedule.cron({
        minute: '0/10',
        hour: '*',
        day: '*',
        month: '*',
        year: '*',
      }),
      targets: [new targets.LambdaFunction(this.fn)],
    });
  }

  /**
   * Topic linked to the Lambda function.
   *
   * @return {*}  {sns.Topic} - sns topic
   * @memberof FsxLifecycleStatusMonitor - class instance
   */
  createSNSTopic(): sns.Topic {
    return new sns.Topic(this, 'fsx-health-sns-topic', {
      displayName: 'fsx-lifecycle-monitor',
      topicName: 'fsx-lifecycle-monitor',
      masterKey: kms.Alias.fromAliasName(this, 'alias', 'alias/aws/sns'),
    });
  }

  createIamPolicy(): iam.Policy {
    const stack = cdk.Stack.of(this);
    return new iam.Policy(this, 'policy', {
      policyName: 'fsx-lambda-sns',
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            'logs:CreateLogGroup',
            'logs:CreateLogStream',
            'logs:PutLogEvents',
          ],
          resources: [
            'arn:aws:logs:' +
              stack.region +
              ':' +
              stack.account +
              ':log-group:/aws/lambda/*',
          ],
        }),
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['fsx:DescribeFileSystems'],
          resources: ['*'],
        }),
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['sns:Publish'],
          resources: ['*'],
        }),
      ],
    });
  }

  /**
   *
   *
   * @return {*}  {lambda.Function}
   * @memberof FsxLifecycleStatusMonitor
   */
  createLambdaFunction(): lambda.Function {
    return new lambda.Function(this, 'fsx-lifecycle-monitor', {
      runtime: lambda.Runtime.PYTHON_3_10,
      handler: 'fsx-health.lambda_handler',
      architecture: lambda.Architecture.X86_64,
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      insightsVersion: lambda.LambdaInsightsVersion.VERSION_1_0_229_0,
      environment: {
        LambdaSNSTopic: this.topic.topicArn,
      },
    });
  }
}
