$(document).ready(function() {

$("#container1").show();
$("#container2").hide();

$(".btn").on("click", function() {
    // event.preventDefault();
    // captain();
 
 $("#container2").show();
 $("#container1").hide();

});

function w3_open() {
        $("#mySidebar").css("display", "block");
        $("#sidebar").hide();
    }

   function w3_close() {
        $("#mySidebar").css("display", "none");
        $("#sidebar").show();
    }

   $("#sidebar").on("click", function() {
        w3_open();
    });

   $("#close").on("click", function() {
        w3_close();
    });
    
// close initial document ready function
});

$(function () {
	$("#datepicker").datepicker();
});

datepicker();