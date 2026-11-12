// js/todo-logic.js

export function addTask(tasks, text) {
  if (!text || text.trim() === "") return tasks;
  return [...tasks, { id: Date.now(), text: text.trim(), completed: false }];
}

export function toggleTask(tasks, id) {
  return tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  );
}

export function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

export function filterTasks(tasks, filter) {
  if (filter === "completed") return tasks.filter(task => task.completed);
  if (filter === "active") return tasks.filter(task => !task.completed);
  return tasks;
}