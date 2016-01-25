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

	//DESAFIO
	$('#desafio').click(function() {
		$('body,html').animate({scrollTop: $(".desafio").offset().top}, "slow");
	});

	//SIDE MENU
	$('.btn-menu').click(function() {
		$(".btn-menu").animate({
			"margin-left":"-80px;"
		}, "slow");

		$('.side-menu').animate({
			'margin-left':'0px'
		}, 'slow');
	});

	$('#fechar').click(function() {
		$("#btn-side-menu").animate({
			"margin-left":"0px"
		}, "slow");

		$('.side-menu').animate({
			'margin-left':'-220px'
		}, 'slow');
	});

});