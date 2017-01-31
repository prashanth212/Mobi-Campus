$('#gmap').live("pagecreate", function() {
	// Create gmap object, centering on given latitude/longitude, with a terrain map type
	$('#map_canvas').gmap({'center': '17.521013,78.367429', 'mapTypeId': 'roadmap', 'autozoom': 'true','zoom':16 
	}).bind('init', function(evt, map) {
	$('#map_canvas').gmap('getCurrentPosition', function(position, status) {
			if ( status === 'OK' ) {
				
				var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				document.getElementById("from").value=clientPosition;
			
				  $('#map_canvas').gmap('displayDirections', { 'origin': $('#from').val() , 'destination': $('#to').val(), 'travelMode': google.maps.DirectionsTravelMode.DRIVING }, { 'panel': document.getElementById('directions') }, function(results, status) {
       if ( status === 'OK'  ) {}
});//displaydirections ends
			}}); //watchposition ends   
			
			$('#submit').click(function() {
				
				  $('#map_canvas').gmap('displayDirections', { 'origin': $('#from').val() , 'destination': $('#to').val(), 'travelMode': google.maps.DirectionsTravelMode.DRIVING }, { 'panel': document.getElementById('directions') }, function(results, status) {
       if ( status === 'OK'  ) {}
});//displaydirections ends

				
				
				});//submit ends                      
});//initends

});//gmap scope limits

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////