// Flex slider 
// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
	animation: "fade",
    controlNav: false,
	directionNav: false,
    pauseOnHover: false,
    slideshowSpeed: 8000
  });
});

// Box animation 


$(document).ready(function() {
    $('.content-d').hide();
    $('.box-d a').click(function() {
        var x = $(this).attr("id");
        var $item = $('#' + x + 'Content');
        if (!$item.is(":visible")) $('.content-d').hide('10','swing');
		$($item).slideToggle(400,'jswing');
        return false;
    });
}); 

/* Tooltip */

$('.tip').tooltip();


/* prettyPhoto Gallery */

jQuery(".prettyphoto").prettyPhoto({
   overlay_gallery: false, social_tools: false
});

