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

	//DESAFIO
	$('#vida-apos').click(function() {
		$('body,html').animate({scrollTop: $(".vida-apos").offset().top}, "slow");
	});

	//CONSEQUENCIAS
	$('#consequencias').click(function() {
		$('body,html').animate({scrollTop: $(".consequencias").offset().top}, "slow");
	});




	//avanco
	$('#sec-avanco').click(function() {
		$('body,html').animate({scrollTop: $(".sec-avanco").offset().top}, "slow");
	});


	//invasao
	$('#drama').click(function() {
		$('body,html').animate({scrollTop: $(".drama").offset().top}, "slow");
	});


	//lider
	$('#lider').click(function() {
		$('body,html').animate({scrollTop: $(".lider").offset().top}, "slow");
	});


	//sec-major
	$('#sec-major').click(function() {
		$('body,html').animate({scrollTop: $(".sec-major").offset().top}, "slow");
	});

	//sec-ouvidor
	$('#sec-ouvidor').click(function() {
		$('body,html').animate({scrollTop: $(".sec-ouvidor").offset().top}, "slow");
	});

	

	



	//SIDE MENU
	$('#btn-side-menu').click(function() {
		$("#btn-side-menu").animate({
			"margin-left":"-90px"
		}, 800);

		$('.side-menu').animate({
			'margin-left':'0px'
		}, 800);
	});


	$('#fechar').click(function() {

		$("#btn-side-menu").animate({
			"margin-left":"0px"
		}, 800);

		$('.side-menu').animate({
			'margin-left':'-220px'
		}, 800);
	});

});
