// JavaScript Document
 $(document).ready(function() {
	$('#submit').click(function(){
	var rollno=$("#rollno").val();
   var eve=$("#eve").val()
	var Comment=$("#comment").val();
	if(rollno==""||Comment=="")
	{
		alert('No kidding ,no empty feedbacks');
	}
	else{
	    	$.ajax({
			type: "POST",
			url: "http://192.168.2.1/mobicampus/eventfeed.php",
			data: "rollno="+ rollno +"& eve="+ eve +"& Comment="+ Comment,
			success: function(){
alert('Your feed back is very valuable to us.Thanks for your time!!');
window.location.href="contact.html";
},
          error: function(){
alert('error submitting the form');
   
        }
			});
			return false;
		
              
	}
	  });
	  
   });