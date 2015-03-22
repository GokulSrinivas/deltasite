$(document).ready(function(){



	$("#clubname").typed({
    	strings: ["^1000 <h1>Delta Force</h1><h2>NIT Trichy</h2>"],
    	// cursorChar: "|",
       	typeSpeed: 0
    });
	
	$("#goDown").click(function(){
		$("#aboutlink").trigger('click');
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