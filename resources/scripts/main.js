$(document).ready(function() {
    // all custom jQuery will go here
    $(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	                event.preventDefault();
	                $(this).ekkoLightbox();
	            });
	// https://ashleydw.github.io/lightbox/
});