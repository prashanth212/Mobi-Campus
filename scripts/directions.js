$('#gmap').live("pagecreate", function() {
	// Create gmap object, centering on given latitude/longitude, with a terrain map type
	$('#map_canvas').gmap({'center': '17.521013,78.367429', 'mapTypeId': 'roadmap', 'autozoom': 'true','zoom':16 
	})
});
