$(function() {
	var lat = "";
    var lng = "";
	var appendeddatahtml = "";
	// var arguments = "";
	var str = "";
	var newstr = "";
	var phone = "";
	var rating = "";
	var icon = "";
	var address = "";
	var near = "";

	$("#map").hide();
	
	$("#sel3").click(function(){
		$(this).val("");
	});
	
	$("#sel3").blur(function(){
		if ($(this).val() == "") {
			$(this).val("Example: Happy Hour");
		}
		
		if ($(this).val() != "Example: Happy Hour") {
			$(this).addClass("focus");
		} else {
			$(this).removeClass("focus");
		}
	});
	
	$("#submit").click(function(event){
		event.preventDefault();
		if ($("#dtla")) {
			lat = 33
			lng = -118
			getVenues();
		} else if ($("#hollywood")) {
			lat = 33
			lng = -118
			getVenues();
		} else {
			getVenues();
		}
	});
	
	// function getLocation(location) {
	//     lat = location.coords.latitude;
	//     lng = location.coords.longitude;
	// 	getVenues();
	// }

	function getVenues() {
		$.ajax({
	  		type: "GET",

	  		url: "https://api.foursquare.com/v2/venues/explore?query=sights&ll="+34+","+-118+"&client_id=X3LQXKCKBKP1TRFD0QU5YUJSY20DUZVDPV2QSSKRI5K0FY55&client_secret=RLS04XT1HJ5ZU5NISP03WTQT04SR05XXKQTSRWFKLEJ5E424&v=20130619&query="+$("#sel3").val()+"",
	  		success: function(data) {
				$("#venues").show();
				var dataobj = data.response.groups[0].items;
				$("#venues").html("");
				console.log('foursquaure success',data)
				console.log(getVenues);
				
				// Rebuild the map using data.
				var myOptions = {
					zoom:11,
					center: new google.maps.LatLng(lat,lng-.2),
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					panControl: false
				},
				map = new google.maps.Map(document.getElementById('map'), myOptions);
				
				// Build markers and elements for venues returned.
				$.each( dataobj, function() {
					if (this.venue.categories[0]) {
						str = this.venue.categories[0].icon.prefix;
						newstr = str.substring(0, str.length - 1);
						icon = newstr+this.venue.categories[0].icon.suffix;
					} else {
						icon = "";
					}
					
					if (this.venue.contact.formattedPhone) {
						phone = "Phone:"+this.venue.contact.formattedPhone;
					} else {
						phone = "";
					}
					
					if (this.venue.location.address) {
						address = '<p class="subinfo">'+this.venue.location.address+'<br>';
					} else {
						address = "";
					}
					
					if (this.venue.rating) {
						rating = '<span class="rating">'+this.venue.rating+'</span>';
					}
					
				appendeddatahtml = '<div class="venue" data-latlong="'+ lat + ',' + lng +'"data-venue="'+ this.venue.name +'"data-location="' + this.venue.location.address +'" data-url="'+ this.venue.url +'"><h2 class="foursqH2"><span>"'+this.venue.name+'"<div class="rating"'+rating+'>';		// appendeddatahtml = '<div class="venue"><h2 class="foursqH2"><span>'+this.venue.name+'<img class="icon" src="'+icon+'"> '+rating+'</span></h2>'+address+phone+'</p><p class="foursqP"><strong>Total Checkins:</strong> '+this.venue.stats.checkinsCount+'</p></div>';
					$("#venues").append(appendeddatahtml);
					
					// Build markers
					// var markerImage = {
					// url: '../images/pin2.png',
					// scaledSize: new google.maps.Size(24, 24),
					// origin: new google.maps.Point(0,0),
					// anchor: new google.maps.Point(24/2, 24)
					// },
					// markerOptions = {
					// map: map,
					// position: new google.maps.LatLng(this.venue.location.lat, this.venue.location.lng),
					// title: this.venue.name,
					// animation: google.maps.Animation.DROP,
					// icon: markerImage,
					// optimized: false
					// },
					// marker = new google.maps.Marker(markerOptions)
					
				});
			}
		})
		.fail(function(err){
			console.log('foursqure', err)
		})
		;
	}
	
	function mapbuild() {
		$("#venues").hide();
		var myOptions = {
		zoom:5,
		center: new google.maps.LatLng(38.962612,-99.080879),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		panControl: false
		},
		map = new google.maps.Map(document.getElementById('map'), myOptions);
	}
	
	mapbuild();


        
});