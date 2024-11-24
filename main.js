

let input = document.querySelector(".input");

let submit = document.querySelector(".add");

let tasks = document.querySelector(".tasks");

let remove = document.querySelector(".remove");

let arrayOffTasks = [];

remove.onclick = function() {
tasks.innerHTML = "";
window.localStorage.removeItem("task");
arrayOffTasks = [];
}


if(window.localStorage.getItem("task")){
    arrayOffTasks = JSON.parse(window.localStorage.getItem("task"));
}

getlocal();

submit.onclick = function(){
    if(input.value !== ""){
      addElement(input.value);
      input.value = "";
    }
}

tasks.addEventListener("click", (e)=>{
    if(e.target.classList.contains("del")){
        deleteTask(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
})


function addElement(tasktext){
const task = {
id : Date.now(),
title : tasktext,
completed : false,
}
arrayOffTasks.push(task);
addtask(arrayOffTasks)
addlocal(arrayOffTasks);
}


function addtask(arrayOffTasks){
    tasks.innerHTML = ""
arrayOffTasks.forEach((task)=>{
    let taskDiv = document.createElement("div")
let span = document.createElement("span");
taskDiv.className = "task"
taskDiv.setAttribute("data-id", task.id)
taskDiv.appendChild(document.createTextNode(task.title));
span.textContent = "Delete"
span.className = "del"
taskDiv.appendChild(span)
tasks.appendChild(taskDiv)
})
}

function addlocal(arrayOffTasks){
window.localStorage.setItem("task", JSON.stringify(arrayOffTasks))
}

function getlocal(){
   let data = window.localStorage.getItem("task")
   if(data){
    let tasks = JSON.parse(data)
    addtask(tasks)
   }
}

function deleteTask(tasksId){
  arrayOffTasks = arrayOffTasks.filter((task)=> task.id != tasksId)
  addlocal(arrayOffTasks);
  if(arrayOffTasks.length === 0){
      window.localStorage.removeItem("task");
  }
}









































