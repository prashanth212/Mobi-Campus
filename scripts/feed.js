// JavaScript Document
   $(document).ready(function() {
	$('#submit').click(function(){
	var name=$("#uname").val();
	var rollno=$("#rollno").val();
	var q1=$("#q1").val();
	var q2=$("#q2").val();
	var q3=$("#q3").val();
	var q4=$("#q4").val();
	var Comment=$("#Comment").val();
	if(name==""||Comment=="")
	{
		alert('No kidding ,no empty feedbacks');
	}
	else{
	    	$.ajax({
			type: "POST",
			url: "http://192.168.2.1/mobicampus/process.php",
			data: "name="+ name +"& rollno="+ rollno +"& q1="+ q1 +"& q2="+ q2 +"& q3="+ q3 +"& q4="+ q4 +"& Comment="+ Comment,
			success: function(){
alert('Your feed back is submitted.Thanks for your time!!');
window.location.href="contact.html";
},
          error: function(){
alert('error in submitting form');
   
        }
			});
			return false;
		
              
	}
	  });
	  
	  
   });