$(document).ready(function(){



	$("#clubname").typed({
    	strings: ["^1000 <h1>Delta Force</h1><h2>NIT Trichy</h2>"],
    	// cursorChar: "|",
       	typeSpeed: 0
    });
	
	var carouselshift =0 ;
	var interval;
	var inc = 0;
	var carouselwidth = ($('#carousel > article').length)*320 + 20 ;
	$('#carousel').css('width',(carouselwidth)+'px');
	setInterval(function(){

		if(inc<0) inc--;
		if(inc>0) inc++;
		var scwidth = window.innerWidth;
		
		if(((inc>0)&&(carouselshift<0))||((inc<0)&&(carouselshift>-carouselwidth+scwidth)))
			carouselshift += inc;
		
		else
		{
			if(carouselshift>0) carouselshift =0 ;
			if(carouselshift<-carouselwidth+scwidth) carouselshift = -carouselwidth+scwidth;
		}


		$('#carousel').css('transform','translate('+carouselshift+'px,0px)');	
	},1000/60);

	$("#goDown").click(function(){
		$("#aboutlink").trigger('click');
	});

	$('#back').hover(function(){
		// (carouselshift==0) return;
		inc=10;
	});
	$('#front').hover(function(){
		// (carouselshift==carouselwidth) return;
		inc=-10;
	});

	$('#back').mouseout(function(){
		inc=0;	
	});
	$('#front').mouseout(function(){
		inc=0;	
	});
//  Binding the motions for scrolling 
	$(window).scroll(0); // Scroll to landing page when page loads.
	$('#scrolltotop').hide();
	$('#thenav').hide();

	$('#aboutlink').click(function(e){
		e.preventDefault();
		scrollToElement($(this).attr('href'),375);
	});	
	$('#worklink').click(function(e){
		e.preventDefault();
		scrollToElement($(this).attr('href'),375);
	});	
	$('#awardlink').click(function(e){
		e.preventDefault();
		scrollToElement($(this).attr('href'),375);
	});	
	$('#codelink').click(function(e){
		e.preventDefault();
		scrollToElement($(this).attr('href'),375);
	});	
	$('#melink').click(function(e){
		e.preventDefault();
		scrollToElement($(this).attr('href'),375);
	});

	$('#scrolltotop').click(function(e){
		e.preventDefault();
		// alert("scliked");
		scrollToElement($(this).attr('href'),375);
	});

	makeparticles(); // Adding particles from particles.js
});