// Sets the date on the scheduler as today's date
$("#currentDay").text(moment().format("MMMM Do YYYY"));

$(".saveBtn").click(function(event) {
    event.preventDefault()
    
    var task = $(".toDo");
    var time = $(".time");
    
    localStorage.setItem(time, task);
    
});