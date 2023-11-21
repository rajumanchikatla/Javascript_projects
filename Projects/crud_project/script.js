var selectrow = null;
function onFormSubmit() {
    var formdata = readformdata();
    if (validateform(formdata)) {
        if (selectrow == null)
            insertrecord(formdata);
        else
            updaterecord(formdata);
        resetform();
    } else {
        alert('please enter all the fields');
        return false;
    }
}

function readformdata() {
    var formdata = {};
    formdata["fname"] = document.getElementById("fname").value;
    formdata["dept"] = document.getElementById("dept").value;
    formdata["Address"] = document.getElementById("Address").value;
    formdata["salary"] = document.getElementById("salary").value;
    return formdata;

}
function insertrecord(data, storeToLocal=true) {
    var table = document.getElementById('employeelist').getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = data.dept;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = data.Address;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = data.salary;
    cell5 = newrow.insertCell(4);

    var editLink = document.createElement('a');
    editLink.href = "#"; // Set href to avoid unexpected navigation
    editLink.textContent = "Edit";
    editLink.onclick = function () {
        onedit(this);
    };
    cell5.appendChild(editLink);

    var deleteLink = document.createElement('a');
    deleteLink.href = "#"; // Set href to avoid unexpected navigation
    deleteLink.textContent = "/Delete";
    deleteLink.onclick = function () {
        onedelete(this);
    }
    cell5.appendChild(deleteLink);

    if(storeToLocal){
        var allldata = JSON.parse(localStorage.getItem('employeeData')) || [];
        allldata.push(data);
        localStorage.setItem('employeeData',JSON.stringify(allldata));
    }
   
}
function resetform() {
    document.getElementById('fname').value = '';
    document.getElementById('dept').value = '';
    document.getElementById('Address').value = '';
    document.getElementById('salary').value = '';
    selectrow = null;

}
function onedit(td) {
    selectrow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectrow.cells[0].innerHTML;
    document.getElementById("dept").value = selectrow.cells[1].innerHTML;
    document.getElementById("Address").value = selectrow.cells[2].innerHTML;
    document.getElementById("salary").value = selectrow.cells[3].innerHTML;
}
function updaterecord(formdata) {
    selectrow.cells[0].innerHTML = formdata.fname;
    selectrow.cells[1].innerHTML = formdata.dept;
    selectrow.cells[2].innerHTML = formdata.Address;
    selectrow.cells[3].innerHTML = formdata.salary;
}
function onedelete(td) {
    //  if (confirm('Are you sure you want to delete this record..?')) 
    {
        row = td.parentElement.parentElement;
        var table = document.getElementById('employeelist')
        table.deleteRow(row.rowIndex);
        var storeddata = JSON.parse(localStorage.getItem('employeeData')) || [];
        storeddata.splice(row.rowIndex -1,1);
        localStorage.setItem('employeeData' ,JSON.stringify(storeddata));
        resetform();
    }
}
// for validation of form
function validateform(formdata) {
    for (var key in formdata) {
        if (formdata[key] === '') {
            return false;
        }
    }
    return true;
}

window.onload = function(){
    // clearLocalStorage();
    var storeddata = JSON.parse(localStorage.getItem('employeeData'));
    if(storeddata){
        for(var i = 0; i<storeddata.length; i++){
            insertrecord(storeddata[i], false);
        }
    }
};
function cleartable() {
    var table = document.getElementById('employeelist').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; 
}
// function clearLocalStorage() {
//     localStorage.clear();
//     cleartable(); 
// }
