const task = document.getElementById("task-button");
const taskContainer = document.getElementById("task-container");

task.addEventListener("click", function () {
  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkbox-container");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", toggleTaskCompletion);
  let paragraphElement = document.createElement("p");
  paragraphElement.contentEditable = true;
  paragraphElement.classList.add("input-box");
  checkbox.type = "checkbox";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(paragraphElement);
  checkboxContainer.appendChild(deleteButton);
  taskContainer.appendChild(checkboxContainer);
  deleteButton.addEventListener("click", function () {
    deleteTodo(checkboxContainer);
  });
});
function deleteTodo(todoItem) {
  todoItem.remove();
}
function toggleTaskCompletion(event) {
  const checkbox = event.target;
  const label = checkbox.nextSibling;
  if (checkbox.checked) {
    label.style.textDecoration = "line-through";
  } else {
    label.style.textDecoration = "none";
  }
}

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = dayNames[dayOfWeek];
const text = `Have a productive ${dayName}`;
const targetElement = document.getElementById("animated-text");
function textTyper(text, targetElement, i = 0) {
  targetElement.textContent += text[i];
  if (i == text.length - 1) {
    return;
  }
  setTimeout(() => textTyper(text, targetElement, i + 1), 90);
}
textTyper(text, targetElement);
