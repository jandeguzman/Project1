<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="css/style.css" type="text/css">
<body>
	<section>
		<p style="text-align:right;"><img width="241" height="61" src="images/poweredByFoursquare_gray.png"></p>
		<p class="quote">"Just need a database of places? The Venues Platform allows developers to search for places and access a wealth of information about them, including addresses, popularity, tips, and photos. It's available free and without any user authentication, as long as applications include adequate attribution." - Foursquare</p><br>
		<form action="#" method="GET" id="searchform">
			<input type="text" name="query" id="query" value="Example: Happy Hour">
			<input type="submit" name="submit" id="submit" value="Submit">
		</form>	
		
		<div id="content">
			<div id="venuewrapper">
				<div id="venues"></div>
			</div>
			<div id="mapcontainer">
				<div class="map" id="map"></div>
			</div>
		</div>
	</section>
	
	<script src="http://code.jquery.com/jquery-1.10.0.min.js" type="text/javascript"></script>
	<script src="http://maps.google.com/maps/api/js?key=YOUR_API_KEY&sensor=false"></script>
	<script src="js/site.js" type="text/javascript"></script>
</body>
</html>