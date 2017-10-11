$(document).ready(function() {

$("#container1").show();
$("#container2").hide();

$(".btn").on("click", function() {
    // event.preventDefault();
    // captain();
 
 $("#container2").show();
 $("#container1").hide();

});
// close initial document ready function
});

$(function () {
	$("#datepicker").datepicker();
});

datepicker();