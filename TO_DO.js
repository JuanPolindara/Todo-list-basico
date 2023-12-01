const $btnAdd = document.querySelector(".add");
const $inpAdd = document.querySelector("#add-todo");
const $listUl = document.querySelector(".list-ul");

$btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  // Esto funciona para agregar las tareas al todo list
  if ($inpAdd.value === "") {
    alert("No se aceptan tareas vacias 😜");
  } else {
    const $li = document.createElement("li");
    const $p = document.createElement("p");
    $p.textContent = $inpAdd.value;
    $li.appendChild($p);
    $li.appendChild(btnmarcar());
    $li.appendChild(btndelete());
    $listUl.appendChild($li);
    $inpAdd.value = "";
  }
});

function btndelete() {
  const $btndel = document.createElement("button");
  $btndel.classList.add("btndel");
  $btndel.textContent = "X";

  $btndel.addEventListener("click", (e) => {
    e.preventDefault();
    const item = e.target.parentElement;
    $listUl.removeChild(item);
  });

  return $btndel;
}

function btnmarcar() {
  const $btnmark = document.createElement("input");
  $btnmark.type = "checkbox";

  $btnmark.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    if ($btnmark.checked) {
      item.classList.add("checked");
    } else {
      item.classList.remove("checked");
    }
  });

  return $btnmark;
}
