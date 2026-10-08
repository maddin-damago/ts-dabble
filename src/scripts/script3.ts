document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title") as HTMLInputElement;
  const todo = document.getElementById("todo") as HTMLInputElement;
  const form = document.querySelector("form") as HTMLFormElement;
  const todoList = document.getElementById("todoList") as HTMLElement;

  const allLi = document.querySelectorAll("li");

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
    const c1 = document.createElement("input");
    c1.type = "checkbox";
    li.textContent = `Title: ${newTodo.title} - Todo: ${newTodo.todo}`;
    li.append(c1);
    todoList.append(li);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  todoList.addEventListener("click", (e: PointerEvent) => {
    (e.target as HTMLElement).classList.toggle("done");
    const text = e.target as HTMLElement;
    console.log(allLi);
    console.log(todoList);
    console.log(todos);
  });

  allLi.forEach((li) => {
    li.addEventListener("click", (e: PointerEvent) => {
      (e.target as HTMLElement).classList.toggle("done");
      alert("Checkbox clicked");
    });
  });
});
