# Introduction

This AWS CDK construct monitors the health of Amazon FSx file systems in an AWS
account by configuring notifications on file system status changes. It helps to
quickly detect and take action if your file systems aren’t healthy.

The implementation is based on this
[post](https://aws.amazon.com/de/blogs/storage/monitoring-the-health-of-amazon-fsx-file-systems-using-amazon-eventbridge-and-aws-lambda/)
in the AWS Storage Blog.
