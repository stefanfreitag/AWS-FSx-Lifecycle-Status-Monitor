
import * as cdk from 'aws-cdk-lib';
import { FsxLifecycleStatusMonitor } from '../src';

describe('SNS Topic Configuration', () => {
  let stack: cdk.Stack;

  beforeEach(() => {
    const app = new cdk.App();

    stack = new cdk.Stack(app, 'stack', {});
    new FsxLifecycleStatusMonitor(stack, 'monitor' );
  });

  test('Fifo is disabled', () => {
    cdk.assertions.Template.fromStack(stack).hasResourceProperties(
      'AWS::SNS::Topic',
      {
        DisplayName: 'fsx-lifecycle-monitor',
      },
    );
  });
});