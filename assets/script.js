// Sets the date on the scheduler as today's date
$("#currentDay").text(moment().format("MMMM Do YYYY"));

//Fucntion to retrieve stored data from local server
function getAll() {
    $("#9 .toDo").val(localStorage.getItem("9"));
    $("#10 .toDo").val(localStorage.getItem("10"));
    $("#11 .toDo").val(localStorage.getItem("11"));
    $("#12 .toDo").val(localStorage.getItem("12"));
    $("#1 .toDo").val(localStorage.getItem("1"));
    $("#2 .toDo").val(localStorage.getItem("2"));
    $("#3 .toDo").val(localStorage.getItem("3"));
    $("#4 .toDo").val(localStorage.getItem("4"));
    $("#5 .toDo").val(localStorage.getItem("5"));
};

//Call retrieve the getAll function 
getAll();


//Function setting "clear all" button's action
$(".clearBtn").click(function (event) {
    event.preventDefault()

    localStorage.clear();
    getAll();
});

//Function setting "save" button's action
$(".saveBtn").click(function (event) {
    event.preventDefault()

    //Set under the variable "Task" and "Time", the content of the text in the row as the value and the ID of the parent DIV as the Key
    var task = $(this).siblings(".toDo").val();
    var time = $(this).parent().attr("id");

    //Store "Task" and "Time" in the local storage
    localStorage.setItem(time, task);

});

