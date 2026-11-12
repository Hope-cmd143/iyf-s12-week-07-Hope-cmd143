// js/app.js
import { getState, handleAddTask, handleToggleTask, handleDeleteTask, setFilter } from "./state.js";
import { renderTasks } from "./ui.js";

function updateUI() {
  const state = getState();
  renderTasks(state.tasks, {
    onToggle: (id) => {
      handleToggleTask(id);
      updateUI();
    },
    onDelete: (id) => {
      handleDeleteTask(id);
      updateUI();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form"); // Adjust ID to match your HTML form
  const input = document.getElementById("todo-input"); // Adjust ID to match your input
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (form && input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleAddTask(input.value);
      input.value = "";
      updateUI();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      setFilter(e.target.dataset.filter);
      updateUI();
    });
  });

  // Initial render on load
  updateUI();
});