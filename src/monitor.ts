import * as path from 'path';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sns from 'aws-cdk-lib/aws-sns';

import { Construct } from 'constructs';
import { FsxLifecycleStatusMonitorProps } from './monitorProps';

export class FsxLifecycleStatusMonitor extends Construct {
  /**
   * Default schedule for the FSx Lifecycle Status Monitor.
   *
   * @static
   * @memberof FsxLifecycleStatusMonitor
   */
  public static readonly DEFAULT_SCHEDULE = events.Schedule.cron({
    minute: '0/10',
    hour: '*',
    day: '*',
    month: '*',
    year: '*',
  });

  /**
   * Default log retention for the FSx Lifecycle Status Monitor.
   *
   * @static
   * @memberof FsxLifecycleStatusMonitor
   */
  public static readonly DEFAULT_LOG_RETENTION_PERIOD =
    logs.RetentionDays.ONE_YEAR;

  /**
   * The Lambda function that will be triggered by the CloudWatch event.
   *
   * @type {lambda.Function}
   * @memberof FsxLifecycleStatusMonitor
   */
  fn: lambda.Function;

  /**
   * Log group for the Lambda function.
   *
   * @type {logs.LogGroup}
   * @memberof FsxLifecycleStatusMonitor
   */
  logGroup: logs.LogGroup;
  /**
   * The IAM policy that will be attached to the Lambda function.
   *
   * @type {iam.Policy}
   * @memberof FsxLifecycleStatusMonitor
   */
  policy: iam.Policy;
  /**
   * The CloudWatch event rule that will trigger the Lambda function.
   *
   * @type {events.Rule}
   * @memberof FsxLifecycleStatusMonitor
   */
  rule: events.Rule;
  /**
   * Topic linked to the Lambda function.
   *
   * @type {sns.Topic}
   * @memberof FsxLifecycleStatusMonitor
   */
  topic: sns.Topic;


  /**
   * Creates an instance of FsxLifecycleStatusMonitor.
   * @param {Construct} scope - parent construct
   * @param {string} id - unique id
   * @memberof FsxLifecycleStatusMonitor - class instance
   */
  constructor(
    scope: Construct,
    id: string,
    props: FsxLifecycleStatusMonitorProps,
  ) {
    super(scope, id);
    this.topic = this.createSNSTopic();
    this.policy = this.createIamPolicy();
    this.fn = this.createLambdaFunction();
    this.fn.role?.attachInlinePolicy(this.policy);

    this.logGroup = new logs.LogGroup(this, 'fsx-health-loggroup', {
      logGroupName: this.fn.functionName,
      retention:
        props.logRetentionDays ??
        FsxLifecycleStatusMonitor.DEFAULT_LOG_RETENTION_PERIOD,
    });
    this.policy.addStatements(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
          'logs:PutLogEvents',
        ],
        resources: [this.logGroup.logGroupArn],
      }),
    );

    this.rule = new events.Rule(this, 'rule', {
      ruleName: 'fsx-health-trigger',
      description:
        'Trigger the FSx health check based on the underlying cron expression',
      schedule: props.schedule ?? FsxLifecycleStatusMonitor.DEFAULT_SCHEDULE,
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
    return new iam.Policy(this, 'policy', {
      policyName: 'fsx-lambda-sns',
      statements: [
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
