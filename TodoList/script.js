const addtask = document.getElementById('addtask');
const taskName = document.getElementById('taskName');
const description = document.getElementById('description');
const date = document.getElementById('date');
const priority = document.getElementById('priority');
const errorMsg = document.getElementById('errorMsg');
const table = document.getElementById('table');


function addTodo(){

   if(validateForm()){
    const row = table.insertRow(-1);
    const rowContent = `<td>${taskName.value}</td><td>${description.value}</td><td>${date.value}</td><td>${priority.value}</td>`; 
    console.log(rowContent)
    row.innerHTML = rowContent; 
    addMessage('task added successfully','success');
    resetFields();
    storetask(rowContent);
   };
}

function validateForm(){
    if(taskName.value.length == 0){
        taskName.focus();
        addMessage('Task Name Should not be Empty!')
        return false;
    }else if(taskName.value.length < 3){
        taskName.focus();
        addMessage('Task Name Should have be atleast three characters!')
        return false;
    }else if(description.value == 0){
        description.focus();
        addMessage('description should not be empty..!');
        return false;
   }else if(description.value.length < 5){
        description.focus();
        addMessage('description should have atleast 5 letters..!')
        return false;
   }else if(date.value == 0){
        date.focus();
        addMessage('please select date')
        return false;
   }else if(priority.selectedIndex == 0){
        priority.focus();
        addMessage('please select priority');
        return false;
   }   

   return true;
}
function resetFields(){
    taskName.value='';
    description.value='';
    date.value='';
    priority.selectedIndex = 0;
}
let tasks = [];
 function storetask(taskContent){
    tasks.push(taskContent);
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}
function loadTasks(){
    if(localStorage.getItem('tasks')){
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(element => {
            const row = table.insertRow(-1);
            row.innerHTML = element;
        });
    }
}


function addMessage(message=false){
    if(message)
        errorMsg.textContent = message;
    else    
        errorMsg.textContent = '';

}
window.onload = function() {
    loadTasks();
};