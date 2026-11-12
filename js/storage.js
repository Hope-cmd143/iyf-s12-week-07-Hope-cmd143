// js/storage.js

const STORAGE_KEY = "iyf_todo_tasks_v1";

export function loadTasks() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load tasks from localStorage", error);
    return [];
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks to localStorage", error);
  }
}