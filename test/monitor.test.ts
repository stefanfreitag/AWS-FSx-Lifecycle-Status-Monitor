
import * as cdk from 'aws-cdk-lib';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { FsxLifecycleStatusMonitor } from '../src';

describe('SNS topic configuration', () => {
  let stack: cdk.Stack;

  beforeEach(() => {
    const app = new cdk.App();

    stack = new cdk.Stack(app, 'stack', {});
    new FsxLifecycleStatusMonitor(stack, 'monitor', {} );
  });

  test('SNS topic name is set', () => {
    cdk.assertions.Template.fromStack(stack).hasResourceProperties(
      'AWS::SNS::Topic',
      {
        DisplayName: 'fsx-lifecycle-monitor',
      },
    );
  });
});

describe('Event rule configuration', () => {
  let stack: cdk.Stack;

  beforeEach(() => {
    const app = new cdk.App();

    stack = new cdk.Stack(app, 'stack', {});
    new FsxLifecycleStatusMonitor(stack, 'monitor', {
      schedule: Schedule.cron({ minute: '0/30', hour: '*', day: '*', month: '*', year: '*' }),
    } );
  });

  test('Custom event bridge rule support', () => {
    cdk.assertions.Template.fromStack(stack).hasResourceProperties(
      'AWS::Events::Rule',
      {
        Name: 'fsx-health-trigger',
        ScheduleExpression: 'cron(0/30 * * * ? *)',
      },
    );
  });
});
