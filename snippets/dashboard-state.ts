/**
 * Dashboard State Logic
 *
 * Controls how dashboard metrics are calculated
 * from task and employee data.
 *
 * The dashboard displays operational KPIs
 * such as employee count and task progress.
 */

export function calculateTaskStats(tasks: any[]) {
  const todo = tasks.filter(t => t.status === "todo").length;
  const inProgress = tasks.filter(t => t.status === "in_progress").length;
  const done = tasks.filter(t => t.status === "done").length;

  return {
    total: tasks.length,
    todo,
    inProgress,
    done,
  };
}

export function getRecentTasks(tasks: any[], limit = 6) {
  return tasks.slice(0, limit);
}
