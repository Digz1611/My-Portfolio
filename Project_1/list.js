// Retrieve tasks from localStorage or initialize empty array
const localTodoTasksArray = JSON.parse(localStorage.getItem("localTodoTasks")) || [];
const sessionTodoTasksArray = JSON.parse(sessionStorage.getItem("sessionTodoTasks")) || [];

const localTodosContainer = document.getElementById("local-storage-todos-container");
const localInputEle = document.getElementById("local-storage-todo-input-ele");
const localAddTaskBtn = document.getElementById("local-storage-add-task-btn");

const localRemoveTasksBtn = document.getElementById("local-storage-remove-task-btn");

const sessionTodosContainer = document.getElementById("session-storage-todos-container");
const sessionInputEle = document.getElementById("session-storage-todo-input-ele");
const sessionAddTaskBtn = document.getElementById("session-storage-add-task-btn");

// Function to update tasks in localStorage or sessionStorage
function updateStorageTasks() {
  localStorage.setItem("localTodoTasks", JSON.stringify(localTodoTasksArray));
  sessionStorage.setItem("sessionTodoTasks", JSON.stringify(sessionTodoTasksArray));
}

// Function to create todo li elements
function createTodoLiElements(todoArray, sectionType) {
  return todoArray.map((todo, index) => {
    const liElement = document.createElement("li");
    const checkboxEle = document.createElement("input");
    const labelEle = document.createElement("label");

    checkboxEle.setAttribute("type", "checkbox");
    checkboxEle.setAttribute("id", `${sectionType}-chbx-${index}`);
    checkboxEle.checked = todo.checked;

    labelEle.setAttribute("for", `${sectionType}-chbx-${index}`);
    labelEle.textContent = todo.text;

    checkboxEle.addEventListener("click", () => {
      todo.checked = checkboxEle.checked;
      labelEle.classList.toggle("todo-task-done");
      updateStorageTasks();
    });

    liElement.append(checkboxEle, labelEle);
    return liElement;
  });
}

// Display tasks from localStorage or sessionStorage on page load
window.addEventListener("load", () => {
  const localTodoLiElements = createTodoLiElements(localTodoTasksArray, "local");
  localTodosContainer.append(...localTodoLiElements);

  const sessionTodoLiElements = createTodoLiElements(sessionTodoTasksArray, "session");
  sessionTodosContainer.append(...sessionTodoLiElements);
});

// Event listener to add task in Local section
localAddTaskBtn.addEventListener("click", () => {
  const newTodoInfo = { checked: false, text: localInputEle.value };
  localTodoTasksArray.push(newTodoInfo);

  const todoLiElements = createTodoLiElements(localTodoTasksArray, "local");
  localTodosContainer.replaceChildren(...todoLiElements);

  localInputEle.value = "";
  updateStorageTasks();
});

// Event listener to add task in Session section
sessionAddTaskBtn.addEventListener("click", () => {
  const newTodoInfo = { checked: false, text: sessionInputEle.value };
  sessionTodoTasksArray.push(newTodoInfo);

  const todoLiElements = createTodoLiElements(sessionTodoTasksArray, "session");
  sessionTodosContainer.replaceChildren(...todoLiElements);

  sessionInputEle.value = "";
  updateStorageTasks();
});

/* Function to remove tasks but manily for the local storage */
localRemoveTasksBtn.addEventListener("click", () => {
  localStorage.removeItem("localTodoTasks"); // Remove the specific item holding the tasks
  localTodoTasksArray.length = 0; // Clear the tasks array as well
  localTodosContainer.innerHTML = ''; // Clear the UI
});


