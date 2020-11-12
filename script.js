
var hour = parseInt(moment().format("HH"))
var now = moment()
var formattedDate = now.format('dddd MMMM Do YYYY')
console.log(formattedDate)

$(document).ready(function() {

$('#currentDay').text(formattedDate)
for(var i=1;i<10;i++){
    timeValue = parseInt(moment($('#t'+i).data('hour'),'HH').format('HH'))
    //textTime = parseInt(moment($('#time'+i).data('time'),'HH').format('HH'))
    console.log($('#'+i))
    if(timeValue<hour){
        $("#"+i).addClass('past')
    }else if(timeValue>hour){
        $("#"+i).addClass('future')
    }else if(timeValue===hour){
        $("#"+i).addClass('present')
    }
 }
})

console.log(hour)
// var timeBlocks = document.getElementsByClassName('hour')
// localStorage.setItem('hour', timeBlocks.val());
// console.log('TIME BLOCKS ----->', timeBlocks)
// var hour = parseInt(moment().format("HH"))
// var input = $("#description").val();


let saveBtn = $("");

let key9 = JSON.parse(localStorage.getItem("storedItem9"));
$("#hour-9").val(key9);

let key10 = JSON.parse(localStorage.getItem("storedItem10"));
$("#hour-10").val(key10);

let key11 = JSON.parse(localStorage.getItem("storedItem11"));
$("#hour-11").val(key11);

let key12 = JSON.parse(localStorage.getItem("storedItem12"));
$("#hour-12").val(key12);

let key1 = JSON.parse(localStorage.getItem("storedItem1"));
$("#hour-1").val(key1);

let key2 = JSON.parse(localStorage.getItem("storedItem2"));
$("#hour-2").val(key2);

let key3 = JSON.parse(localStorage.getItem("storedItem3"));
$("#hour-3").val(key3);

let key4 = JSON.parse(localStorage.getItem("storedItem4"));
$("#hour-4").val(key4);

let key5 = JSON.parse(localStorage.getItem("storedItem5"));
$("#hour-5").val(key5);



 if (parseInt($("textarea").attr("id")) > hour) {
    $("#9").addClass("present")
     }


// localStorage.getItem("server", input);





    $(".saveBtn").on("click", function() {
        console.log("clicked")
        localStorage.setItem("server", thisButton);
    })



