const $btnAdd = document.querySelector(".add");
const $inpAdd = document.querySelector("#add-todo");
const $listUl = document.querySelector(".list-ul");

$btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  // Esto funciona para agregar las tareas al todo list
  const $li = document.createElement("li");
  $li.textContent = $inpAdd.value;
  $listUl.appendChild($li);
  $inpAdd.value = "";
});
