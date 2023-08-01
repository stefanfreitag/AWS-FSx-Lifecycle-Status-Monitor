import * as events from 'aws-cdk-lib/aws-events';
import * as logs from 'aws-cdk-lib/aws-logs';


/**
 * Configuration properties for the FSx Lifecycle Status Monitor.
 *
 * @export
 * @interface FsxLifecycleStatusMonitorProps
 */
export interface FsxLifecycleStatusMonitorProps {
  /**
   * The schedule for the FSx Lifecycle Status Monitor.
   *
   * @type {events.Schedule}
   *
   * @memberof FsxLifecycleStatusMonitorProps
   * @default "events.Schedule.cron({ minute: '0/10', hour: '*', day: '*', month: '*', year: '*' })"
   * @example
   * this.monitor = new FsxLifecycleStatusMonitor(this, "monitor",{
   *   logRetentionDays: logs.RetentionDays.ONE_MONTH,
   *   schedule: events.Schedule.rate(cdk.Duration.hours(1)),
   * });
   */
  readonly schedule?: events.Schedule;

  /**
   * The log retention days for the FSx Lifecycle Status Monitor.
   * @type {logs.RetentionDays}
   * @memberof FsxLifecycleStatusMonitorProps
   * @default logs.RetentionDays.ONE_YEAR
   * @example
   * this.monitor = new FsxLifecycleStatusMonitor(this, "monitor",{
   *   logRetentionDays: logs.RetentionDays.ONE_MONTH
   * });
   */
  readonly logRetentionDays?: logs.RetentionDays;
}
