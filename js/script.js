$(function () {
    $('.js_navli a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    });


/*widget taken from http://jsfiddle.net/HotFusionMan/y3vN5/3/ */
  })();

	/*
	    $('.js_navli a').mouseleave(function () {
		$(this).css('backgroundColor', '#16675e');
    })
	*/
	    /*$('.js_dropdown_menu').hover(function () {
        $('.js_menu').css('color', 'black');
    })

		$('.js_dropdown_menu_section').hover(function () {
        $('.js_menu_section').css('color', 'black');
    })
	*/
