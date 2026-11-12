// js/ui.js

export function renderTasks(tasks, { onToggle, onDelete }) {
  const taskListElement = document.getElementById("task-list"); // Adjust ID to match your HTML
  if (!taskListElement) return;

  taskListElement.innerHTML = "";

  if (tasks.length === 0) {
    taskListElement.innerHTML = `<li class="empty-message">No tasks found.</li>`;
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    
    li.innerHTML = `
      <span class="task-text" style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
        ${escapeHTML(task.text)}
      </span>
      <div class="task-actions">
        <button class="toggle-btn" data-id="${task.id}">
          ${task.completed ? "Mark Active" : "Complete"}
        </button>
        <button class="delete-btn" data-id="${task.id}">Delete</button>
      </div>
    `;

    // Attach event listeners
    li.querySelector(".toggle-btn").addEventListener("click", () => onToggle(task.id));
    li.querySelector(".delete-btn").addEventListener("click", () => onDelete(task.id));

    taskListElement.appendChild(li);
  });
}

// Simple helper to prevent XSS injection
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}