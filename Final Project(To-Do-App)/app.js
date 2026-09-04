const exploreTodoData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    console.log("all to do", todos);
    console.log("type to do", typeof todos);

    console.log(Object.keys(todos[0]));
    const lengthTodosComplicated = todos.filter(
      (todo) => todo.completed,
    ).length;
    console.log(lengthTodosComplicated);

    displaySimpleTodoList(todos.slice(0, 20));
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};

const displaySimpleTodoList = (todos) => {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>First 10 Todos: </h2>";

  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.textContent = `${todo.title}   (${todo.completed ? "Completed" : "Pending"})`;
    root.appendChild(todoElement);
  });
};

exploreTodoData();
