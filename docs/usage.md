# Usage

- Add the library as dependency to your project. For example

    ```json title="package.json" linenums="1"
    "dependencies": {
      "aws_fsx_lifecycle_status_monitor": "0.0.4",
      ...
    },
    ```

  and install it with `npm install` or `yarn install`.

- Create a new stack and add the CDK construct

    ```typescript title="fsx-monitor-stack.ts" linenums="1"
    export class FsxMonitor extends Stack {

      constructor(scope: Construct, id: string, props: StackProps = {}) {

        super(scope, id, props);

        new FsxLifecycleStatusMonitor(this, 'FSxLifecycleStatusMonitor', {
          schedule: Schedule.cron({ minute: '0/30', hour: '*', day: '*', month: '*', year: '*' }),
        });

      }
    }
    ```
