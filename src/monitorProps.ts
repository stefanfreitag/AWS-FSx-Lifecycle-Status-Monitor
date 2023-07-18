import * as events from 'aws-cdk-lib/aws-events';


/**
 * Properties for the FSx Lifecycle Status Monitor.
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
   *
   * @example "events.Schedule.cron({ minute: '0/10', hour: '*', day: '*', month: '*', year: '*' })"
   */
  readonly schedule?: events.Schedule;
}
