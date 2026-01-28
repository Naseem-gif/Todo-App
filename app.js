const input = document.querySelector("#todoInput");
const ol = document.querySelector("ol");
const todoArr = [];

const renderTodo = () => {
  ol.innerHTML = "";
  for (let i = 0; i < todoArr.length; i++) {
    ol.innerHTML += `<li>${todoArr[i]}
    <button onclick="editTodo(${i})">Edit Todo</button>
    <button onclick="deleteTodo(${i})">Delete Todo</button>
    </li>`;
  }
};

const addTodo = () => {
  todoArr.push(input.value);
  renderTodo();
  input.value = "";
};

function deleteTodo(index) {
  todoArr.splice(index, 1);
  renderTodo()
}


function editTodo(index) {
    todoArr.splice(index, 1, prompt("Edit Todo"));
    renderTodo()

}