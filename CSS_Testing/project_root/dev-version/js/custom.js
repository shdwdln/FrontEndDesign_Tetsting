+function($){
	'use strict';

	$(window).bind('scroll', function() {
		//nav get fixed after scroll
		var sliderSection = $("#slider-section"),
			windowHeight = $(window).height(),
			topHeader = $('#top-navigation');
		if ($(window).scrollTop() > windowHeight){
			topHeader.addClass('navbar-fixed animated fadeInDown').removeClass('fadeInUp');
		}
	});

	messages:{
		name:{
			require: "Please enter your name.",
			minLength: "Looks too small. Check length"
		},
		email:{
			require: "Please enter your email address.",
			minLength: "It must be valid email."	
		},
		message:{
			require: "Check the formatting.",
			minLength: "Not enought information."
		}
	},


	submitHandler: function(form){

		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();

		$('#submit').val('Please wait...');

		jQuery.ajax({

			type: 'post',
			data: $(form).serialize();
			url: "http://mirobin.com/general_mail.php",

			sucess: function(){
				$('#submit').val('Sent!')
			}
		})
	}
}