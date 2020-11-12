// Global Variables

var hour = parseInt(moment().format("HH"))
var now = moment()
var formattedDate = now.format('dddd MMMM Do YYYY')
console.log(formattedDate)
var array = []

// Color Coding/OnClick
$(document).ready(function () {

    $('#currentDay').text(formattedDate)

    for (var i = 1; i < 10; i++) {
        timeValue = parseInt(moment($('#t' + i).data('hour'), 'HH').format('HH'))
        //textTime = parseInt(moment($('#time'+i).data('time'),'HH').format('HH'))
        console.log($('#' + i))
        if (timeValue < hour) {
            $("#" + i).addClass('past')
        } else if (timeValue > hour) {
            $("#" + i).addClass('future')
        } else if (timeValue === hour) {
            $("#" + i).addClass('present')
        }
    }

    // Local Storage 
    $(".saveBtn").on("click", function () {
        var tId;
        var Text;

        tId = $(this).attr('data-button')
        Text = $('#' + tId).val()

        array.push({ 'id': tId, 'task': Text });
        localStorage.setItem("tasks", JSON.stringify(array));
        /
    })
})
