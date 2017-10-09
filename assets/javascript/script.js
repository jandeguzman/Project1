$(document).ready(function() {

$("#container1").show();
$("#container2").hide();

$("#submit").on("click", function() {
    // event.preventDefault();
    // captain();
 
 $("#container2").show();
 $("#container1").hide();

});

 // $(function () {
 // 	$('#datetimepicker1').datetimepicker();
 //    });

// YELP API ---------------------------------------------------------------------------------------------------------------------------------------
// var location = $("#sel3 option:selected").text();
// var budget = $("#sel2 option:selected").text();
// var input; 
// var feeling = $("#sel1 :selected").text();
// console.log(feeling);
// var budget = $("#sel2 :selected").text();
// console.log(budget);
// var location = $("#sel3 :selected").text();
// console.log(location);

// yelpBudget();

// function yelpBudget(){
//     if (budget === "Under $25") {
//         budget = 1;
//     }

//     else if (budget === "$25-$50") {
//     	budget = 2;
//     }

//     else if (budget === "$50-$100") {
//     	budget = 3;
//     }

//     else if (budget === "Ballin' Out Tonight") {
//     	budget = 4;
//     }
//     console.log(budget);
// }

// $("#sel1").on("change", function () {
// 	feeling = $("#sel1 :selected").text();
// 	console.log(feeling + " food");
// });

// $("#sel2").on("change", function() {
//     budget = $("#sel2 :selected").text();
//     yelpBudget();
//     console.log(budget);
// });

// $("#sel3").on("change", function () {
// 	location = $("#sel3 :selected").text();
// 	console.log(location);
// });

// function captain () {
// 	var rapid = new RapidAPI("default-application_59d047ace4b0b0cacf7cd159", "a0a1fa0b-9987-4b27-b004-aab10d3f2c95");
// 	var payload = "";

// 	rapid.call('YelpAPI', 'getBusinesses', { 
// 		'accessToken': 'XagdwX1Mk3Zi8cr73ZyrJHSRy7FIC_6m5xNsYl1DpKzyhT4VlmIHJFa_-lmcWIqnqQmj0Ia-x9lW1GyLShgX3j_DlufYq4oNAnrl7oHMUPlKwEmemBmKRkMghvTSWXYx',
// 		'term': feeling + " food",
// 		'location': location,
// 		'price': budget,
// 	}).on('success', function (payload) {

// 		console.log(payload);
// 	    var results = payload.data;
// 	    for (var i = 0; i < results.length; i++) {
// 	    	$("yelpCarousel").prepend("<img src=" + payload.businesses[0].image_url + ">");
// 	    }
// 	}).on('error', function (payload) {
// 		 console.log("didn't work")
// 	});

// }


// close initial document ready function
});
