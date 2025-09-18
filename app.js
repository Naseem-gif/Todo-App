const input = document.querySelector("#todoInput");
const ol = document.querySelector("ol");
const todoArr = []


function renderTodo(){
    ol.innerHTML = ""
    for (let i = 0; i < todoArr.length; i++){
         ol.innerHTML += `<li>${todoArr[i]} <button onclick="deleteTodo(${i})">Delete</button> 
         <button onclick="editTodo(${i})">Edit</button> </li>`
         console.log(todoArr);
         
    }
}

function addTodo(){
 
    todoArr.push(input.value);
    renderTodo()


    input.value = ""  
}



function deleteTodo(index){
    todoArr.splice(index, 1)
    renderTodo()
}


function editTodo(index){
    todoArr.splice(index, 1, prompt("Edit Todo"))
    renderTodo()
}



// String Methods
// toLowerCase
// toUpperCase
// slice
// split
// join
// replace
// replaceAll


