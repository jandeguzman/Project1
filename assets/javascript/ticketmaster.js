$(".btn").on("click", function(event) {
    event.preventDefault();
    //var event = $("#event-input").val();
    //var area= $("#area-input").val();
    var date= $("#datepicker").val();
    var startDate= moment(date).format("YYYY-MM-DD")+"T00:00:00Z";
    console.log(startDate);
    var endDate= moment(date).add(1,"days").format("YYYY-MM-DD")+"T00:00:00Z";
    console.log(endDate);
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?startDateTime="+startDate+"&endDateTime="+endDate+"&dmaId=324&countryCode=US&apikey=m6OUuGrxlDjIc5oKu54Cpl86M6YaD97z";
        
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
                        var image = $("<img>").attr("src", json._embedded.events[i].images[0].url).attr("class", "eventImages");
                        var p = $("<p>").text(json._embedded.events[i].name).attr("class", "eventNames");
                        div.append(image);
                        div.append(p);
                        $("#ticketmaster").append(div);
                        // $("#ticketmaster").append("<p class='eventNames'>"+json._embedded.events[i].name+"</p><a target='_blank' href="
                        //   +json._embedded.events[i].url+"><img src="+json._embedded.events[i].images[0].url+" class='eventImages'></a>");
                      }
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
        //for more information & get Query parameters: http://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2
        });
});