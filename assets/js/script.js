var currentDay = moment().format('dddd, MMMM Do');

$(document).ready(function () {
    $("#currentDay").append(currentDay);
})