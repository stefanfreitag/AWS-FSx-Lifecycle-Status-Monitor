# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxLifecycleStatusMonitor <a name="FsxLifecycleStatusMonitor" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor"></a>

#### Initializers <a name="Initializers" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.Initializer"></a>

```typescript
import { FsxLifecycleStatusMonitor } from 'aws-fsx-lifecycle-status-monitor'

new FsxLifecycleStatusMonitor(scope: Construct, id: string, props: FsxLifecycleStatusMonitorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - parent construct. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | - unique id. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.Initializer.parameter.props">props</a></code> | <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps">FsxLifecycleStatusMonitorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.Initializer.parameter.id"></a>

- *Type:* string

unique id.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps">FsxLifecycleStatusMonitorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.createIamPolicy">createIamPolicy</a></code> | *No description.* |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.createLambdaFunction">createLambdaFunction</a></code> | *No description.* |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.createSNSTopic">createSNSTopic</a></code> | Topic linked to the Lambda function. |

---

##### `toString` <a name="toString" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createIamPolicy` <a name="createIamPolicy" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.createIamPolicy"></a>

```typescript
public createIamPolicy(): Policy
```

##### `createLambdaFunction` <a name="createLambdaFunction" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.createLambdaFunction"></a>

```typescript
public createLambdaFunction(): Function
```

##### `createSNSTopic` <a name="createSNSTopic" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.createSNSTopic"></a>

```typescript
public createSNSTopic(): Topic
```

Topic linked to the Lambda function.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.isConstruct"></a>

```typescript
import { FsxLifecycleStatusMonitor } from 'aws-fsx-lifecycle-status-monitor'

FsxLifecycleStatusMonitor.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.fn">fn</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | The Lambda function that will be triggered by the CloudWatch event. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | Log group for the Lambda function. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.Policy</code> | The IAM policy that will be attached to the Lambda function. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | The CloudWatch event rule that will trigger the Lambda function. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | Topic linked to the Lambda function. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fn`<sup>Required</sup> <a name="fn" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.fn"></a>

```typescript
public readonly fn: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

The Lambda function that will be triggered by the CloudWatch event.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.logGroup"></a>

```typescript
public readonly logGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

Log group for the Lambda function.

---

##### `policy`<sup>Required</sup> <a name="policy" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.policy"></a>

```typescript
public readonly policy: Policy;
```

- *Type:* aws-cdk-lib.aws_iam.Policy

The IAM policy that will be attached to the Lambda function.

---

##### `rule`<sup>Required</sup> <a name="rule" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

The CloudWatch event rule that will trigger the Lambda function.

---

##### `topic`<sup>Required</sup> <a name="topic" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.topic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

Topic linked to the Lambda function.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.DEFAULT_LOG_RETENTION_PERIOD">DEFAULT_LOG_RETENTION_PERIOD</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Default log retention for the FSx Lifecycle Status Monitor. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.DEFAULT_SCHEDULE">DEFAULT_SCHEDULE</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Default schedule for the FSx Lifecycle Status Monitor. |

---

##### `DEFAULT_LOG_RETENTION_PERIOD`<sup>Required</sup> <a name="DEFAULT_LOG_RETENTION_PERIOD" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.DEFAULT_LOG_RETENTION_PERIOD"></a>

```typescript
public readonly DEFAULT_LOG_RETENTION_PERIOD: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

Default log retention for the FSx Lifecycle Status Monitor.

---

##### `DEFAULT_SCHEDULE`<sup>Required</sup> <a name="DEFAULT_SCHEDULE" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.DEFAULT_SCHEDULE"></a>

```typescript
public readonly DEFAULT_SCHEDULE: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Default schedule for the FSx Lifecycle Status Monitor.

---

## Structs <a name="Structs" id="Structs"></a>

### FsxLifecycleStatusMonitorProps <a name="FsxLifecycleStatusMonitorProps" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps"></a>

Configuration properties for the FSx Lifecycle Status Monitor.

#### Initializer <a name="Initializer" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps.Initializer"></a>

```typescript
import { FsxLifecycleStatusMonitorProps } from 'aws-fsx-lifecycle-status-monitor'

const fsxLifecycleStatusMonitorProps: FsxLifecycleStatusMonitorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps.property.logRetentionDays">logRetentionDays</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The log retention days for the FSx Lifecycle Status Monitor. |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule for the FSx Lifecycle Status Monitor. |

---

##### `logRetentionDays`<sup>Optional</sup> <a name="logRetentionDays" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps.property.logRetentionDays"></a>

```typescript
public readonly logRetentionDays: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.ONE_YEAR

The log retention days for the FSx Lifecycle Status Monitor.

---

*Example*

```typescript
this.monitor = new FsxLifecycleStatusMonitor(this, "monitor",{
  logRetentionDays: logs.RetentionDays.ONE_MONTH
});
```


##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* "events.Schedule.cron({ minute: '0/10', hour: '*', day: '*', month: '*', year: '*' })"

The schedule for the FSx Lifecycle Status Monitor.

---

*Example*

```typescript
this.monitor = new FsxLifecycleStatusMonitor(this, "monitor",{
  logRetentionDays: logs.RetentionDays.ONE_MONTH,
  schedule: events.Schedule.rate(cdk.Duration.hours(1)),
});
```




