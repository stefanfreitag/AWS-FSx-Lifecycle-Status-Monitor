# Architecture

The Amazon FSx Health Monitor is a serverless application that uses [AWS Lambda](https://aws.amazon.com/lambda/), [Amazon CloudWatch Events](https://aws.amazon.com/cloudwatch/), and [Amazon SNS](https://aws.amazon.com/sns/) to monitor the health of [Amazon FSx windows file systems](https://aws.amazon.com/fsx/windows/) in an AWS account. The application consists of the following components:

- Amazon CloudWatch Events rule  
  This rule is backed by a configurable schedule. Based on the schedule the Lambda
  function is triggered.

- AWS Lambda function  
  This function is invoked by the CloudWatch Events rule and checks all FSx
  volumes in the linked AWS account for their status. If the status is *not*
  `AVAILABLE` (see [here](#fsx-file-system-status)) it publishes a message to the
  Amazon SNS topic.
  
- Amazon SNS topic  
  This topic receives notifications from the Lambda function. Users can subscribe
  to this topic to receive notifications about the health of the FSx file systems.

## FSx file system status

| File system status | Description |
| -- | -- |
| AVAILABLE | The file system is in a healthy state, and is reachable and available for use.  |
| CREATING | Amazon FSx is creating a new file system. |
| DELETING | Amazon FSx is deleting an existing file system. |
| UPDATING | The file system is undergoing a customer-initiated update. |
| MISCONFIGURED | The file system is in an impaired state due to a change in your Active Directory environment. Your file system is either currently unavailable or at risk of losing availability, and backups may not succeed. |
| MISCONFIGURED_UNAVAILABLE | The file system is currently unavailable due to a change in your Active Directory environment. |
| FAILED | The file system has failed and Amazon FSx can't recover it.<br/ >When creating a new file system, Amazon FSx was unable to create the new file system. |
