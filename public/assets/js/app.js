$(function() {
	var mbrFName  = $('#memberFName'),
		mbrLName  = $('#memberLName'),
		mbrNo     = $('#memberNo'),
		mbrErr    = $('.memberError'),
		btnSubmit = $('input[type=submit]'),
		baseUrl   = 'http://localhost:8010/members/';

	btnSubmit.attr('disabled', 'disabled');

	// the first and last name field are disabled (you can enable if you want)
	// figured due to data integrity, you would want this information to be the same
	//mbrFName.attr('disabled', 'disabled');
	//mbrLName.attr('disabled', 'disabled');

	// this hides any flash message after 500ms of display
	$('#flash-message').delay(3000).fadeOut(500);

	// This is the actual AJAX call
	// .done will be called if a value is found
	// .fail method will be called if a member record is NOT found
	// If you are serving on a port other than 8000, you will need to change the URL
	mbrNo.on('blur', function() {
		var memberNo = mbrNo.val();
		$.getJSON(baseUrl+memberNo, function() {
			}).done(function(result) {
					mbrErr.hide();
					mbrFName.val(result.first_name);
					mbrLName.val(result.last_name);
					btnSubmit.removeAttr('disabled');
			}).fail(function(){
					mbrErr.show();
					mbrFName.val('');
					mbrLName.val('');
					mbrNo.focus();
					btnSubmit.attr('disabled', 'disabled');
		});
	});
});