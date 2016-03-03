$(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing', function () {
			window.location.hash = target;
		});
	});
});

$(document).ready(function(){
    $("#above").hide();
	$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#above').fadeIn();
        } else {
            $('#above').fadeOut();
        }
    });
	   $('#above').click(function () {
	   $('body,html').animate({scrollTop: 0}, 900);
	   return false;
        });
	});
});
