@Service
public class ScheduleTaskService {

    // Task Scheduler
    TaskScheduler scheduler;

    // A map for keeping scheduled tasks
    Map<String, ScheduledFuture<?>> jobsMap = new HashMap<>();

    public ScheduleTaskService(TaskScheduler scheduler) {
        this.scheduler = scheduler;
    }


    // Schedule Task to be executed every night at 00 or 12 am
    public void addTaskToScheduler(String jobId, Runnable task, Date runningDate) {
        ScheduledFuture<?> scheduledTask = scheduler.schedule(task, runningDate);
        jobsMap.put(jobId, scheduledTask);
    }

    // Remove scheduled task
    public void removeTaskFromScheduler(String jobId) {
        ScheduledFuture<?> scheduledTask = jobsMap.get(jobId);
        if (scheduledTask != null) {
            scheduledTask.cancel(true);
            jobsMap.put(id, null);
        }
    }

    // A context refresh event listener
    @EventListener({ContextRefreshedEvent.class})
    void contextRefreshedEvent() {
        // Get all tasks from DB and reschedule them in case of context restarted
    }
}
