# AWS FSx Life Cycle Status Monitor

The documentation is available [here](https://stefanfreitag.github.io/AWS-FSx-Lifecycle-Status-Monitor/).

## How to run

### Tests

- Execute the unit tests under `./test`

  ```shell
  yarn test
  ```

- Execute integration tests under `.integ-tests`


  ```shell
  yarn integ-runner --directory ./integ-tests  --update-on-failed --parallel-regions eu-central-1
  ```

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
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.fn">fn</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.Policy</code> | *No description.* |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |

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

---

##### `policy`<sup>Required</sup> <a name="policy" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.policy"></a>

```typescript
public readonly policy: Policy;
```

- *Type:* aws-cdk-lib.aws_iam.Policy

---

##### `rule`<sup>Required</sup> <a name="rule" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---

##### `topic`<sup>Required</sup> <a name="topic" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.topic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.DEFAULT_SCHEDULE">DEFAULT_SCHEDULE</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |

---

##### `DEFAULT_SCHEDULE`<sup>Required</sup> <a name="DEFAULT_SCHEDULE" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitor.property.DEFAULT_SCHEDULE"></a>

```typescript
public readonly DEFAULT_SCHEDULE: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---

## Structs <a name="Structs" id="Structs"></a>

### FsxLifecycleStatusMonitorProps <a name="FsxLifecycleStatusMonitorProps" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps"></a>

Properties for the FSx Lifecycle Status Monitor.

#### Initializer <a name="Initializer" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps.Initializer"></a>

```typescript
import { FsxLifecycleStatusMonitorProps } from 'aws-fsx-lifecycle-status-monitor'

const fsxLifecycleStatusMonitorProps: FsxLifecycleStatusMonitorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule for the FSx Lifecycle Status Monitor. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-fsx-lifecycle-status-monitor.FsxLifecycleStatusMonitorProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule for the FSx Lifecycle Status Monitor.

---

*Example*

```typescript
"events.Schedule.cron({ minute: '0/10', hour: '*', day: '*', month: '*', year: '*' })"
```




