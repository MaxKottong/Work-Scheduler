var currentDay = moment().format('dddd, MMMM Do');

var timeBlocks = [
    { hour: "9AM", time: 9 },
    { hour: "10AM", time: 10 },
    { hour: "11AM", time: 11 },
    { hour: "12PM", time: 12 },
    { hour: "1PM", time: 13 },
    { hour: "2PM", time: 14 },
    { hour: "3PM", time: 15 },
    { hour: "4PM", time: 16 },
    { hour: "5PM", time: 17 },
];

var tasks = ["", "", "", "", "", "", "", "", ""];

$(document).ready(function () {
    $("#currentDay").append(currentDay);
})

$(".saveBtn").click(function (event) {
    event.preventDefault();
    console.log("Clicked");
})

function generateTimeBlocks() {
    $(".container").empty();

    for (i = 0; i < timeBlocks.length; i++) {
        var taskText = tasks[i];
        var hourName = timeBlocks[i].hour;
        var currentHour = parseInt(moment().format("HH"));
        var hour = timeBlocks[i].time;
        var inputElStyle = "";

        if (hour < currentHour) {
            inputElStyle = "past";
        } else {
            inputElStyle = "future";
        }

        if (hour === currentHour) {
            inputElStyle = "present";
        }

        var timeBlockEl = $("<form>").attr("class", "input-group row");
        var hourDivEl = $("<div>").attr("class", "col-1");
        var hourEl = $("<div>").attr("class", "hour text-right");
        var inputEl = $("<textarea>").attr("class", "form-control textarea ${inputElStyle}").attr("type", "text").attr("id", "input" + i).val(taskText);
        var buttonEl = $("<div>").attr("class", "input-group-append");
        var button = $("<button>").attr("class", "saveBtn").attr("data-index", i);
        var saveIconEl = $("<span>").attr("class", "oi oi-hard-drive");

        $(".container").append(timeBlockEl);
    }
}

setInterval(function () {

})