document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title") as HTMLInputElement;
  const todo = document.getElementById("todo") as HTMLInputElement;
  const form = document.querySelector("form") as HTMLFormElement;
  const todoList = document.getElementById("todoList") as HTMLElement;
  type Todo = {
    title: string;
    todo: string;
  };

  const todos: Todo[] = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo: Todo = {
      title: title.value,
      todo: todo.value,
    };

    title.value = "";
    todo.value = "";

    todos.push(newTodo);

    const li = document.createElement("li");
    li.textContent = `Title: ${newTodo.title} - Todo: ${newTodo.todo}`;
    todoList.append(li);
  });

  todoList.addEventListener("click", (e: PointerEvent) => {
    (e.target as HTMLElement).classList.toggle("done");
  });
});
