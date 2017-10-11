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

$(function() {
    $("#datepicker").datepicker();
});

var toDoCount = 0;
$(document).on("click", "div.resturants", function() {
    var div2 = $("<div>");
    div2.attr("id", "item-" + toDoCount)
    var button = $("<button>").text("x").attr("class", "remove").attr("data-to-do", toDoCount);
    button.attr("data-name", "yelp");
    (button).appendTo(div2);
    $(this).appendTo(div2);
    (div2).appendTo(mySidebar);
    toDoCount++;
    console.log(toDoCount);

    $(".remove").on("click", function() {
        var toDoNumber = $(this).attr("data-to-do");
        console.log(toDoNumber);
        var state = ($(this).attr("data-name"));

        if (state === "yelp") {
            console.log("yelp")
            $("#item-" + toDoNumber).appendTo($("#yelp"));
            $(this).remove();
        }
    });
});

$(document).on("click", "div.events", function() {
    var div2 = $("<div>");
    div2.attr("id", "item-" + toDoCount).attr("data-name", "ticketmaster");
    var button = $("<button>").text("x").attr("class", "remove").attr("data-to-do", toDoCount);
    button.attr("data-name", "ticketmaster");
    (button).appendTo(div2);
    $(this).appendTo(div2);
    (div2).appendTo(mySidebar);
    toDoCount++;
    console.log(toDoCount);

    $(".remove").on("click", function() {
        var toDoNumber = $(this).attr("data-to-do");
        console.log(toDoNumber);
        if ($(this).data("name") === "ticketmaster") {
            $("#item-" + toDoNumber).appendTo($("#ticketmaster"));
            $(this).remove();
        }
    });

});

$(document).on("click", "div.venue", function() {
    var div2 = $("<div>");
    div2.attr("id", "item-" + toDoCount).attr("data-name", "foursquare");
    var button = $("<button>").text("x").attr("class", "remove").attr("data-to-do", toDoCount);
    button.attr("data-name", "foursquare");
    (button).appendTo(div2);
    $(this).appendTo(div2);
    (div2).appendTo(mySidebar);
    toDoCount++;
    console.log(toDoCount);

    $(".remove").on("click", function() {
        var toDoNumber = $(this).attr("data-to-do");
        console.log(toDoNumber);
        if ($(this).data("name") === "foursquare") {
            $("#item-" + toDoNumber).appendTo($("#venues"));
            $(this).remove();
        }
    });
});


datepicker();