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
    todoState = todos.slice(0, 10);
    return todoState
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
        <div class="todo-actions">
            <button class="btn btn-toggle" data-action="toggle">
                ${todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button class="btn btn-delete" data-action="delete">
                Delete
            </button>
        </div>
    `;
  console.log(todo.title);
  return todoElement;
};


const updateTodoElement = (todo) => {
		// Find the existing todo element by its ID
    const todoElement = document.getElementById(`todo-${todo.id}`);
    if (todoElement) {
		    // Create a new element with updated data
        const newTodoElement = createTodoElement(todo);
        // Replace the old element with the new one
        todoElement.replaceWith(newTodoElement);
        
        // For example, when we toggle a todo from incomplete to complete:
				// Before: <div id="todo-1" class="todo-item">...</div>
				// After:  <div id="todo-1" class="todo-item completed">...</div>
    }
}

const renderTodoList = () => {
  const todoList = document.getElementById("todoList");

  todoList.innerHTML = "";

  if (todoState.length === 0) {
    todoList.innerHTML = "<p>No todos found.</p>";
    return;
  }

  todoState.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });
};




const  handleTodoAction = (event) => {
		// Find if a button was clicked
    const button = event.target.closest('button');
    if (!button) return; // If no button was clicked, do nothing
    
		// Get which action to perform from the button's data attribute
    // <button data-action="toggle">Complete</button>
    // or
    // <button data-action="delete">Delete</button>
    const action = button.dataset.action;
    // Find which todo item this button belongs to
    const todoElement = button.closest('.todo-item');
    // Get the todo ID from the element's ID
    const todoId = parseInt(todoElement.id.replace('todo-', ''));
    // Find the actual todo data from our state
    const todo = todoState.find(t => t.id === todoId);

    if (!todo) return;
		
		// Perform the appropriate action
    if (action === 'toggle') {
        toggleTodoStatus(todo);
    } else if (action === 'delete') {
        deleteTodo(todo);
    }
}





const initializeApp = async () => {
  const todos = await fetchTodos();
  renderTodoList(todos);
};

document.addEventListener("DOMContentLoaded", initializeApp);
