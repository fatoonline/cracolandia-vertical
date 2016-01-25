$(document).ready(function(){
	//INICO
	$('#inicio').click(function() {
		$('body,html').animate({scrollTop: $(".header").offset().top}, "slow");
	});

	//cracolandia
	$('#cracolandia').click(function() {
		$('body,html').animate({scrollTop: $(".cracolandia-vertical").offset().top}, "slow");
	});

	//DRAMA
	$('#drama').click(function() {
		$('body,html').animate({scrollTop: $(".drama").offset().top}, "slow");
	});

});