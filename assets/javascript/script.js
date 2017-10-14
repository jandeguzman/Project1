$(document).ready(function() {

    $("#container1").show();
    $("#container2").hide();
    $("#container3").hide();
    $(".scheduleContainer").hide();
    $(".spotifyContainer").hide();
    $(".mapContainer").hide();
    $("iframe").hide();

    $(".btn").on("click", function() {
        $("#container1").hide();
        $("#container2").show();
        $("#container3").hide();
    });

    $("#send").on("click", function() {
        $("#container1").hide();
        $("#container2").hide();
        $("#container3").show();
        $("#mySidebar").hide();
        $(".scheduleContainer").show();
        $(".spotifyContainer").show();
        $(".mapContainer").show();
        $("iframe").show();
    })

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


    $(function() {
        $("#datepicker").datepicker();
    });

    var config = {
        apiKey: "AIzaSyDfaB4IXdd-wr63RAh_B4OXA6u_B5rQkmU",
        authDomain: "project1-2cd76.firebaseapp.com",
        databaseURL: "https://project1-2cd76.firebaseio.com",
        projectId: "project1-2cd76",
        storageBucket: "project1-2cd76.appspot.com",
        messagingSenderId: "994754377401"
    };

    firebase.initializeApp(config);

    var database = firebase.database();
    database.ref().remove();

    var toDoCount = 0;

    $(document).on("click", "div.resturants", function() {

        var imageName = $(this).attr("data-image");
        var name = $(this).attr("data-resturantName");
        var location = $(this).attr("data-location");
        var url = $(this).attr("data-url");

        var div2 = $("<div>");
        div2.attr("id", "item-" + toDoCount)
        var button = $("<button>").text("x").attr("class", "remove").attr("data-to-do", toDoCount);
        button.attr("data-name", "yelp");
        (button).appendTo(div2);
        $(this).appendTo(div2);
        (div2).appendTo(mySidebar);
        toDoCount++;
        console.log(toDoCount);

        var userChoice = {
            name: name,
            imageName: imageName,
            location: location,
            url: url,
            number: toDoCount,
        }

        database.ref().push(userChoice);

        $(".remove").on("click", function() {
            var toDoNumber = $(this).attr("data-to-do");
            console.log(toDoNumber);

            database.ref().orderByChild("number").equalTo(parseInt(toDoNumber)).once('value').then(function(snapshot) {
                console.log('snapshot', snapshot.val());
                snapshot.forEach(function(childSnapshot) {
                    console.log('childSnapshot', childSnapshot.key)
                    database.ref().child(childSnapshot.key).remove();
                });
            });
            var state = ($(this).attr("data-name"));

            if (state === "yelp") {
                console.log("yelp")
                $("#item-" + toDoNumber).appendTo($("#yelp"));
                $(this).remove();
            }
        });

    });

    $(document).on("click", "div.events", function() {

        var imageName = $(this).attr("data-image");
        var name = $(this).attr("data-eventName");
        var location = $(this).attr("data-location");
        var url = $(this).attr("data-url");

        var div2 = $("<div>");
        div2.attr("id", "item-" + toDoCount).attr("data-name", "ticketmaster");
        var button = $("<button>").text("x").attr("class", "remove").attr("data-to-do", toDoCount);
        button.attr("data-name", "ticketmaster");
        (button).appendTo(div2);
        $(this).appendTo(div2);
        (div2).appendTo(mySidebar);
        toDoCount++;
        console.log(toDoCount);

        var userChoice = {
            name: name,
            imageName: imageName,
            location: location,
            url: url,
            number: toDoCount,
        }

        database.ref().push(userChoice);

        $(".remove").on("click", function() {
            var toDoNumber = $(this).attr("data-to-do");
            console.log(toDoNumber);
            database.ref().orderByChild("number").equalTo(parseInt(toDoNumber)).once('value').then(function(snapshot) {
                console.log('snapshot', snapshot.val());
                snapshot.forEach(function(childSnapshot) {
                    console.log('childSnapshot', childSnapshot.key)
                    database.ref().child(childSnapshot.key).remove();
                });
            });

            if ($(this).data("name") === "ticketmaster") {
                $("#item-" + toDoNumber).appendTo($("#ticketmaster"));
                $(this).remove();
            }
        });

    });

    $(document).on("click", "div.venue", function() {

        var name = $(this).attr("data-venue");
        var location = $(this).attr("data-location");
        var url = $(this).attr("data-url");
        var latlong = $(this).attr("data-latlong");

        var div2 = $("<div>");
        div2.attr("id", "item-" + toDoCount).attr("data-name", "foursquare");
        var button = $("<button>").text("x").attr("class", "remove").attr("data-to-do", toDoCount);
        button.attr("data-name", "foursquare");
        (button).appendTo(div2);
        $(this).appendTo(div2);
        (div2).appendTo(mySidebar);
        toDoCount++;
        console.log(toDoCount);

        var userChoice = {
            name: name,
            location: location,
            url: url,
            number: toDoCount,
        }

        database.ref().push(userChoice);


        $(".remove").on("click", function() {
            var toDoNumber = $(this).attr("data-to-do");
            console.log(toDoNumber);

            database.ref().orderByChild("number").equalTo(parseInt(toDoNumber)).once('value').then(function(snapshot) {
                console.log('snapshot', snapshot.val());
                snapshot.forEach(function(childSnapshot) {

                    console.log('childSnapshot', childSnapshot.key)
                    database.ref().child(childSnapshot.key).remove();
                });
            });


            if ($(this).data("name") === "foursquare") {
                $("#item-" + toDoNumber).appendTo($("#venues"));
                $(this).remove();
            }

        });
    });

    $("#send").on("click", function() {
        database.ref().on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                console.log("latlong", childSnapshot.val().latlong);
                $("#itinerary").append("<h1>" + childSnapshot.val().name + "</h1><img class='eventImages' src=" + childSnapshot.val().imageName + "><br><h6>" + childSnapshot.val().location + "</h6><h6><a target='_blank' href=" + childSnapshot.val().url + ">More Info...</a></h6><br>");
            });
        });
    });

});


//     database.ref().on("child_added", function(childSnapshot) {
//         $("#itinerary").append("<h1>" + childSnapshot.val().name + "</h1><img class='eventImages' src=" + childSnapshot.val().imageName + "><h6>" + childSnapshot.val().location + "</h6><h6><a target='_blank' href=" + childSnapshot.val().url + ">More Info...</a></h6><br>");
//     });
// });
datepicker();