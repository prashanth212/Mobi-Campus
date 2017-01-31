// JavaScript Document
$(document).ready(function(){
		var output = $('#output');
			$.ajax({
			url: 'http://192.168.2.1/mobicampus/events.php',
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 15000,
			success: function(data, status){
				$.each(data, function(i,item){ 
				var events = ' <h3 class="item">'+item.title+'</h3>'+ '<p class="description">'+item.description+'</p>';
				
					output.append(events);
				});
			},
			error: function(){
			   output.text('There was an error loading the data.');
			}
		});
	
});