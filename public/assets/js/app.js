$(function() {
	$('input[type=submit]').attr('disabled', 'disabled');

	// the first and last name field are disabled (you can enable if you want)
	// figured due to data integrity, you would want this information to be the same
	$('#memberFName').attr('disabled', 'disabled');
	$('#memberLName').attr('disabled', 'disabled');

	// this hides any flash message after 500ms of display
	$('#flash-message').delay(3000).fadeOut(500);

	// This is the actual AJAX call
	// .done will be called if a value is found
	// .fail method will be called if a member record is NOT found
	// If you are serving on a port other than 8000, you will need to change the URL
	$('#memberNo').on('blur', function(){
		var memberNo = $('#memberNo').val(),
		    url      = 'http://localhost:8000/members/'+memberNo;
		$.getJSON(url, function() {
		}).done(function(result) {
				$('.memberError').hide();
				$('#memberFName').val(result.first_name);
				$('#memberLName').val(result.last_name);
				$('input[type=submit]').removeAttr('disabled');
		}).fail(function(){
				$('.memberError').show();
				$('#memberFName').val('');
				$('#memberLName').val('');
				$('#memberNo').focus();
				$('input[type=submit]').attr('disabled', 'disabled');
		});
	});
});