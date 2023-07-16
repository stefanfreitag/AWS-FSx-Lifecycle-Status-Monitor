import { ExpectedResult, IntegTest } from "@aws-cdk/integ-tests-alpha";
import * as cdk from "aws-cdk-lib";

import { FsxLifecycleStatusMonitor } from "../src";

class StackUnderTest extends cdk.Stack {
  monitor: FsxLifecycleStatusMonitor;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.monitor = new FsxLifecycleStatusMonitor(this, "monitor");
  }
}

// CDK App for Integration Tests
const app = new cdk.App();

const stack = new StackUnderTest(app, "monitor-stack", {
  analyticsReporting: true,
  description: "Integration test stack for FSx lifecycle status monitor",
});

const integ = new IntegTest(app, "MyTestCase", {
  regions: ["eu-central-1"],
  testCases: [stack],
  allowDestroy: ["AWS::Events::Rule"],
});

integ.assertions
  .awsApiCall("SNS", "getTopicAttributes", {
    TopicArn: stack.monitor.topic.topicArn,
  })
  .expect(
    ExpectedResult.objectLike({
      Attributes: {
        DisplayName: "fsx-lifecycle-monitor",
      },
    })
  );

app.synth();
