$(document).ready(function(){

    /* Dropdown Fade Effect */
	var fadeIn = "animate__fadeIn";
	var fadeOut = "animate__fadeOut";
	$('li.drop-link').on('mouseenter', function(){
        var target = $(this).attr("data-target");
        $("." + target).fadeIn(300, function() {});
    });
    $('li.drop-link').on('mouseleave', function(){
        var target = $(this).attr("data-target");
        $("." + target).fadeOut(300, function() {});
    });
    
});