let theInput = document.querySelector(".add-task input");
let theAddButton =document.querySelector(".add-task .plus");
let taskCotainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-Completed  span");

window.onload = function(){
    theInput.focus(); 
};
theAddButton.onclick = function(){

if(theInput.value === ''){

console.log("No Value");
} else{
    let noTasksMsg = document.querySelector(".no-tasks-message");

    if(document.body.contains(document.querySelector(".no-tasks-message"))){

    noTasksMsg.remove();
    }


  
let mainSpan = document.createElement("span");

let deleteElement = document.createElement("span");

let text = document.createTextNode(theInput.value);

let deleteText = document.createTextNode("Delete");

mainSpan.appendChild(text);

mainSpan.className ='task-box';

deleteElement.appendChild(deleteText);

deleteElement.className = 'delete';

mainSpan.appendChild(deleteElement);

taskCotainer.appendChild(mainSpan);

theInput.value ='';
theInput.focus();
calculatTasks();
}

};
// delet
document.addEventListener('click', function(e)
{
    if(e.target.className == 'delete'){

        e.target.parentNode.remove();

        if(taskCotainer.childElementCount == 0){

        createNoTasks();
        }
    }
    

    if(e.target.classList.contains ('task-box')){

        e.target.classList.toggle("finished");
    }
    calculatTasks();
});

function createNoTasks(){
    let msgSpan = document.createElement("span");
    let msgText = document.createTextNode("No Tasks To Show")
    msgSpan.appendChild(msgText);
    msgSpan.className ='no-task-message';
    taskCotainer.appendChild(msgSpan);
}
    
function calculatTasks(){
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}

