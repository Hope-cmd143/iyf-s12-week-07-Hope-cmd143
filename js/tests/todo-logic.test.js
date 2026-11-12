import { addTask, toggleTask, deleteTask, filterTasks } from "../js/todo-logic.js";

describe("To-Do Pure Logic Functions", () => {
  test("addTask should add a new task without mutating the original array", () => {
    const initialTasks = [{ id: 1, text: "Learn JS", completed: false }];
    const newTasks = addTask(initialTasks, "Build Module");

    expect(newTasks.length).toBe(2);
    expect(initialTasks.length).toBe(1); // Proves original array isn't changed!
    expect(newTasks[1].text).toBe("Build Module");
  });

  test("addTask should handle empty or whitespace-only text (edge case)", () => {
    const initialTasks = [{ id: 1, text: "Task 1", completed: false }];
    const result = addTask(initialTasks, "   ");

    expect(result).toEqual(initialTasks);
  });

  test("toggleTask should flip the completed status of a task", () => {
    const tasks = [{ id: 1, text: "Task 1", completed: false }];
    const updated = toggleTask(tasks, 1);

    expect(updated[0].completed).toBe(true);
    expect(tasks[0].completed).toBe(false); // Immutability check
  });

  test("filterTasks should correctly filter active and completed tasks", () => {
    const tasks = [
      { id: 1, text: "A", completed: false },
      { id: 2, text: "B", completed: true }
    ];

    expect(filterTasks(tasks, "active").length).toBe(1);
    expect(filterTasks(tasks, "completed").length).toBe(1);
    expect(filterTasks(tasks, "all").length).toBe(2);
  });
});