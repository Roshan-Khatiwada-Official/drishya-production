(function ($) {
	"use strict";
	$(document).ready(function () {
		$('#contact-form').on('submit', function (e) {
			e.preventDefault();
			var name = $('#name').val().trim();
			var service = $('#service').val();
			var message = $('#message').val().trim();

			var text = "Hello Drishya Production, I'm " + name + ".";
			if (service) { text += " I'm interested in: " + service + "."; }
			if (message) { text += " " + message; }

			var phone = "9779808166785";
			var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
			window.open(url, "_blank");
		});
	});
})(window.jQuery);
