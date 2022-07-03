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

$(document).ready(function () {
    $("#currentDay").append(currentDay);
})

$(".saveBtn").click(function (event) {
    event.preventDefault();
    console.log("Clicked");
})

function generateTimeBlocks() {
    $(".container").empty();
}

setInterval(function () {

})