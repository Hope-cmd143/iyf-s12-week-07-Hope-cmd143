// js/state.js
import { loadTasks, saveTasks } from "./storage.js";
import { addTask, toggleTask, deleteTask, filterTasks } from "./todo-logic.js";

let tasks = loadTasks();
let currentFilter = "all";

export function getState() {
  return {
    tasks: filterTasks(tasks, currentFilter),
    currentFilter,
    totalCount: tasks.length
  };
}

export function handleAddTask(text) {
  tasks = addTask(tasks, text);
  saveTasks(tasks);
}

export function handleToggleTask(id) {
  tasks = toggleTask(tasks, id);
  saveTasks(tasks);
}

export function handleDeleteTask(id) {
  tasks = deleteTask(tasks, id);
  saveTasks(tasks);
}

export function setFilter(filter) {
  currentFilter = filter;
}