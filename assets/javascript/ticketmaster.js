$(".btn").on("click", function(event) {
    event.preventDefault();
    var date= $("#datepicker").val();
    var startDate= moment(date).format("YYYY-MM-DD")+"T00:00:00Z";
    console.log(startDate);
    var endDate= moment(date).add(1,"days").format("YYYY-MM-DD")+"T00:00:00Z";
    console.log(endDate);
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?startDateTime="+startDate+"&endDateTime="+endDate+"&dmaId=324&countryCode=US&apikey=m6OUuGrxlDjIc5oKu54Cpl86M6YaD97z";
    var sidebar = $("#mySidebar");
    var toDoCount = 0;
        
        $.ajax({
        type:"GET",
        url: queryURL,
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                      for(var i=0; i<20; i++) {
                        div = $("<div>");
                        div.attr("class", "events");
                        div.attr("data-image", json._embedded.events[i].images[0].url);
                        div.attr("data-eventName", json._embedded.events[i].name);
                        div.attr("data-location",json._embedded.events[i]._embedded.venues[0].address.line1);
                        div.attr("data-url",json._embedded.events[i].url);
                        var image = $("<img>").attr("src", json._embedded.events[i].images[0].url).attr("class", "eventImages");
                        var p = $("<p>").text(json._embedded.events[i].name).attr("class", "eventNames");
                        div.append(image);
                        div.append(p);
                        $("#ticketmaster").append(div);
                        }

                    },


        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
        });
});



