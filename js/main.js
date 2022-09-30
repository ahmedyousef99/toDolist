let  input = document.querySelector('.input-text');
let submit = document.querySelector('.add')
let deleteAll = document.querySelector('.del-all')
let tasksDiv = document.querySelector('.tasks')


let listOfTasks = []
if(localStorage.getItem("tasks")) {
  listOfTasks = JSON.parse(localStorage.getItem("tasks"))
  
}
getTasksFromLocalStorage()


 function addTasksToArr (value) {
  const task = {
    id: Date.now(),
    title: value,
    completed: false
  }
  listOfTasks.push(task)
}


submit.onclick = function() {
  if (input.value !== ``) {
    addTasksToArr(input.value)
    input.value = null
    addElementToPageForm(listOfTasks)
    addTasksToLocalStorageFrom(listOfTasks)
    
    
  } else {
    console.log(1111);
  }
}

tasksDiv.addEventListener("click", (e) => {
  if(e.target.classList.contains("del")) {
    deleteTasks(e.target.parentElement.getAttribute("data-id"))
    console.log(listOfTasks)
    e.target.parentElement.remove()
    
  } else  if(e.target.classList.contains("del-all")) {
  
    e.target.parentElement.remove()
    
  }
})

function addElementToPageForm(listOfTasks) {
  tasksDiv.innerHTML = ""
  listOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    if(task.completed) {
      div.className = "task done"
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "del btn btn-danger"
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span)
    tasksDiv.appendChild(div)
  });
}

function addTasksToLocalStorageFrom(listOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(listOfTasks))
}
function getTasksFromLocalStorage() {
 let data =  window.localStorage.getItem("tasks")
  if(data) {
    let tasks = JSON.parse(data)
    addElementToPageForm(tasks)
  }
}
function deleteTasks(tasksId) {
 
  listOfTasks = listOfTasks.filter((e) => e.id != tasksId)
  addTasksToLocalStorageFrom(listOfTasks)
}

deleteAll.onclick = function() {
  window.localStorage.removeItem("tasks")
  tasksDiv.innerHTML = ``
 
}
var y=1
if(function f () {
}) {
  y+= typeof f

}

console.log( y  )
