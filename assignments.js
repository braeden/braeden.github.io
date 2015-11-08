//Add assignments popup
$(document).ready(function() {
	$(function() {
    	$( "#datepicker" ).datepicker();
  	});
	$("#plusbutton").click(function() {
	 	$("#getinput").fadeIn( "fast", function() {});
	});
	$("#cancelit").click(function() {
	 	$("#getinput").fadeOut( "fast", function() {});
	 	$('input').val('');
	});

	$("#addit").click(function() {
	 	$("#getinput").fadeOut( "fast", function() {});
	});
	
});


//Add to local storage

//Display the table

//Circular checkmark - fetches element by key and deletes