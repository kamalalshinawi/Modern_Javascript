//  prepare Api

const API_URL = "https://jsonplaceholder.typicode.com/todos";

let todoState = [];
// fetch data
const fetchTodos = async () => {
  showLoading();
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const todos = await response.json();
        todoState = todos.slice(0, 10);
        return todoState;
    } catch (error) {
        showError('Failed to load todos. Please refresh the page.');
        return [];
    } finally {
        hideLoading();
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
                ${todo.completed ? "Undo" : "Complete"}
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
};

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

const handleTodoAction = (event) => {
  // Find if a button was clicked
  const button = event.target.closest("button");
  if (!button) return; // If no button was clicked, do nothing

  // Get which action to perform from the button's data attribute
  // <button data-action="toggle">Complete</button>
  // or
  // <button data-action="delete">Delete</button>
  const action = button.dataset.action;
  // Find which todo item this button belongs to
  const todoElement = button.closest(".todo-item");
  // Get the todo ID from the element's ID
  const todoId = parseInt(todoElement.id.replace("todo-", ""));
  // Find the actual todo data from our state
  const todo = todoState.find((t) => t.id === todoId);

  if (!todo) return;

  // Perform the appropriate action
  if (action === "toggle") {
    toggleTodoStatus(todo);
  } else if (action === "delete") {
    deleteTodo(todo);
  }
};

const toggleTodoStatus = async (todo) => {
  const todoElement = document.getElementById(`todo-${todo.id}`);
    const toggleButton = todoElement.querySelector('.btn-toggle');
    toggleButton.disabled = true;

    try {
        const response = await fetch(`${API_URL}/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: !todo.completed
            })
        });

        if (!response.ok) throw new Error('Failed to update todo');

        todo.completed = !todo.completed;
        updateTodoElement(todo);

    } catch (error) {
        showError('Failed to update todo. Please try again.');
        toggleButton.disabled = false;
    }
};

const deleteTodo = async (todo) =>  {
    const todoElement = document.getElementById(`todo-${todo.id}`);
    todoElement.classList.add('deleting');

    try {
        const response = await fetch(`${API_URL}/${todo.id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to delete todo');

        todoState = todoState.filter(t => t.id !== todo.id);

        // Fade out and remove
        todoElement.style.opacity = '0';
        setTimeout(() => {
            todoElement.remove();
            if (todoState.length === 0) {
                document.getElementById('todoList').innerHTML =
                    '<p>No todos found.</p>';
            }
        }, 300);

    } catch (error) {
        showError('Failed to delete todo. Please try again.');
        todoElement.classList.remove('deleting');
    }
};

const initializeForm = () => {
  const form = document.getElementById("todoForm");
  const input = document.getElementById("todoInput");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    const todoText = input.value.trim();

    if (todoText.length < 3) {
      alert("Todo must be at least 3 characters long");
      return;
    }

    // Create new todo
    await createTodo(todoText);

    // Clear input
    input.value = "";
  });
};

const createTodo = async (todoText) => {
  const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;
    submitButton.classList.add('loading');

    try {
        const newTodo = {
            title: todoText,
            completed: false,
            userId: 1
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        });

        if (!response.ok) {
            throw new Error('Failed to create todo');
        }

        const createdTodo = await response.json();
        const simulatedTodo = {
            ...createdTodo,
            id: Date.now(),
        };

        todoState.unshift(simulatedTodo);

        const todoElement = createTodoElement(simulatedTodo);
        const todoList = document.getElementById('todoList');

        // Add with animation
        todoElement.style.opacity = '0';
        todoList.insertBefore(todoElement, todoList.firstChild);
        requestAnimationFrame(() => {
            todoElement.style.opacity = '1';
        });

    } catch (error) {
        showError('Failed to create todo. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
};

const showLoading = () => {
    document.getElementById('loadingMessage').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
}

const hideLoading =  () => {
    document.getElementById('loadingMessage').style.display = 'none';
}

const showError = (message) => {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);  // Hide error after 3 seconds
}



const initializeApp = async () => {
  initializeForm();

  document
    .getElementById("todoList")
    .addEventListener("click", handleTodoAction);
  fetchTodos().then(renderTodoList);
};

document.addEventListener("DOMContentLoaded", initializeApp);
