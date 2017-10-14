(function() {

    window.onload = function() {

        // Creating a new map
        var map = new google.maps.Map(document.getElementById("mapp"), {
            center: new google.maps.LatLng(36, -120),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });


        // Creating the JSON data
        var json = [{
                "title": "Los Angeles",
                "lat": 34,
                "lng": -118,
                "description": "<strong>DTLA</strong>"
            },
            {
                "title": "Taco Bar",
                "lat": 34.03,
                "lng": -118.03,
                "description": "<strong>Taco Bar</strong>"
            },
            {
                "title": "Staples Center",
                "lat": 34.05,
                "lng": -118.05,
                "description": "<strong>Staples Center</strong>"
            },
            {
                "title": "DTLA",
                "lat": 34.01,
                "lng": -118.01,
                "description": "<strong>DTLA</strong>"
            }
        ]

        // Creating a global infoWindow object that will be reused by all markers
        var infoWindow = new google.maps.InfoWindow();

        // Looping through the JSON data
        for (var i = 0, length = json.length; i < length; i++) {
            var data = json[i],
                latLng = new google.maps.LatLng(data.lat, data.lng);

            // Creating a marker and putting it on the map
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: data.title
            });

            // Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
            (function(marker, data) {

                // Attaching a click event to the current marker
                google.maps.event.addListener(marker, "click", function(e) {
                    infoWindow.setContent(data.description);
                    infoWindow.open(map, marker);
                });


            })(marker, data);

        }

    }

})();





// var firebase = new Firebase("https://project1-2cd76.firebaseio.com");

// function myMap() {
//    console.log('myMap')

//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.12),
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     var map = new google.maps.Map(document.getElementById("mapp"), mapOptions);
// }







//initalise Firebase, load longLats from database
// firebase.on("child_added", function(snapshot, prevChildKey) {
//             // Get latitude and longitude from the cloud.
//             var newPosition = snapshot.val();

//             // Create a google.maps.LatLng object for the position of the marker.
//             // A LatLng object literal (as above) could be used, but the heatmap
//             // in the next step requires a google.maps.LatLng object.

//             var latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);


//             var markers = []
//             var cluster = new MarkerClusterer(map, markers, options)

//             firebase.on("child_added", function(snapshot) {
//                 var newPosition = snapshot.val()
//                 var latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng)

//                 var marker = new google.maps.Marker({ position: latLng })

//                 cluster.addMarker(marker)

//             })
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('mapp'), {
//     zoom: 2,
//     center: new google.maps.LatLng(2.8,-187.3),
//     mapTypeId: 'terrain'
//   });

//   // Create a <script> tag and set the USGS URL as the source.
//   var script = document.createElement('script');
//   // This example uses a local copy of the GeoJSON stored at
//   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//   script.src = 'https://project1-2cd76.firebaseio.com';
//   document.getElementsByTagName('location')[0].appendChild(script);
// }

// // Loop through the results array and place a marker for each
// // set of coordinates.
// window.eqfeed_callback = function(results) {
//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1],coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//   }
// }

//  var config = {
//    apiKey: "AIzaSyDfaB4IXdd-wr63RAh_B4OXA6u_B5rQkmU",
//    authDomain: "project1-2cd76.firebaseapp.com",
//    databaseURL: "https://project1-2cd76.firebaseio.com",
//    projectId: "project1-2cd76",
//    storageBucket: "project1-2cd76.appspot.com",
//    messagingSenderId: "994754377401"
//  };
//  firebase.initializeApp(config);


//       jQuery(function($) {
//     // Asynchronously Load the map API 
//     var script = document.createElement('script');
//     script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyBQ_8mPMsxvezjGdar8Y_tnm9rSKXM7GDs&callback=findMarkers";
//     document.body.appendChild(script);
// });


// function initialize(markers) {
//    var map;
//     var bounds = new google.maps.LatLngBounds();
//     var mapOptions = {
//         mapTypeId: 'roadmap'
//     };

//    // Display a map on the page
//    map = new google.maps.Map(document.getElementById("mapp"), mapOptions);
//    map.setTilt(45);

//    console.log(markers);
//    console.log(markers.length);

//    // Info Window Content
//    var infoWindowContent = [
//         ['<div class="info_content">' +  
//         '<p>' + 'adresse' +'</p>' +        '</div>'],
//     ]; 

// // Display multiple markers on a map
// var infoWindow = new google.maps.InfoWindow(), marker, i;

// // Loop through our array of markers & place each one on the map  
// for( i = 0; i < markers.length; i++ ) {
//     var position = new google.maps.LatLng(markers[i][1].lat(), markers[i][1].lng());
//     bounds.extend(position);
//     marker = new google.maps.Marker({
//         position: position,
//         map: map,
//         title: markers[i][0]
//     });

//     // Allow each marker to have an info window    
//     google.maps.event.addListener(marker, 'click', (function(marker, i) {
//         return function() {
//             infoWindow.setContent(infoWindowContent[i][0]);
//             infoWindow.open(map, marker);
//         }
//     })(marker, i));
// }
//     var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//     this.setZoom(14);
//     google.maps.event.removeListener(boundsListener);
// });    
// }

// function findMarkers(){

//     markers = [];



//     var data = firebase.database();

//     var dataRef = firebase.database().ref("signalement/");
//     dataRef.on("child_added", function(data) {
//         var key = data.key;
//         const signalement = data.val();
//         const adresse = signalement.adresse;
//         const coordonnees = signalement.coordonnees;
//         var marker = [adresse, coordonnees];
//         markers.push( marker );
//     });

//    // send prepared marker array to map initialize function
//     intialize(markers);
// }