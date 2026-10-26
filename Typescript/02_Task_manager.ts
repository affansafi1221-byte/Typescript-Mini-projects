
interface Task {
  id: number;
  title: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "Completed";
}

class TaskManager {
  private tasks: Task[] = [];

  addTask(title: string, priority: Task["priority"]): void {
    const task: Task = {
      id: Date.now(),
      title,
      priority,
      status: "Pending"
    };

    this.tasks.push(task);
    console.log(`Task added: ${title}`);
  }

  completeTask(id: number): void {
    const task = this.tasks.find(item => item.id === id);

    if (!task) {
      console.log("Task not found!");
      return;
    }

    task.status = "Completed";
    console.log(`Completed: ${task.title}`);
  }

  showTasks(): void {
    console.table(this.tasks);
  }

  filterPending(): Task[] {
    return this.tasks.filter(task => task.status === "Pending");
  }

  showStatistics(): void {
    const total = this.tasks.length;
    const completed = this.tasks.filter(
      task => task.status === "Completed"
    ).length;

    console.log("Total Tasks:", total);
    console.log("Completed:", completed);
    console.log("Pending:", total - completed);
  }
}

const manager = new TaskManager();

manager.addTask("Learn TypeScript Generics", "High");
manager.addTask("Practice Array Methods", "Medium");
manager.addTask("Update GitHub README", "Low");

manager.completeTask(
  // Complete the first task using its ID in your next improvement.
  -1
);

manager.showTasks();
manager.showStatistics();

console.log("Pending Tasks:", manager.filterPending());
