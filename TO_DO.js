const $btnAdd = document.querySelector(".add");
const $inpAdd = document.querySelector("#add-todo");
const $listUl = document.querySelector(".list-ul");

$btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  // Esto funciona para agregar las tareas al todo list
  const $li = document.createElement("li");

  $li.textContent = $inpAdd.value;
  $li.appendChild(btndelete());
  $listUl.appendChild($li);
  $inpAdd.value = "";
});

function btndelete() {
  const $btndel = document.createElement("button");
  $btndel.textContent = "X";

  $btndel.addEventListener("click", (e) => {
    e.preventDefault();
    const item = e.target.parentElement;
    $listUl.removeChild(item);
  });

  return $btndel;
}
