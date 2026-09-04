//  prepare Api

const API_URL = "https://jsonplaceholder.typicode.com/todos";

let todoState = [];
// fetch data
const fetchTodos = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }

    const todos = await response.json();
    return todos.slice(0, 10);
  } catch (error) {
    throw new Error("Failed to fetch Todos");
  }
};

const createTodoElement = (todo) => {
  const todoElement = document.createElement("div");
  todoElement.className = `todo-item ${todo.completed ? "completed" : ""}`;
  todoElement.id = `todo-${todo.id}`;

  todoElement.innerHTML = `
        <span class="todo-text">${todo.title}</span>
        <span class="todo-status">${todo.completed ? "✓" : "○"}</span>

    `;
  console.log(todo.title);
  return todoElement;
};

const renderTodoList = (todos) => {
  const todoList = document.getElementById("todoList");

  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = "<p>No todos found.</p>";
  }

  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
};

const initializeApp = async () => {
  const todos = await fetchTodos();
  renderTodoList(todos);
};

document.addEventListener("DOMContentLoaded", initializeApp);
