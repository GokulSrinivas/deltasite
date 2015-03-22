function whitelist(id)
{
  // console.log('whitelist'+id);
  var selector="#" + id + "link";
  // console.log($('div.nav > ul > a > li'));
  $('ul.navlist > a > li').removeClass('active');
  $(selector).addClass('active');
}

function refreshnav()
{
  var scrollamt = $('body').scrollTop();
  
  var h = $(window).height();// 6;
  if($(window).scrollTop()<h) whitelist('nullval');
  else if(($(window).scrollTop()>=h)&&($(window).scrollTop()<2*h))
  {
    whitelist('about'); 
  } 
  else if(($(window).scrollTop()>=2*h)&&($(window).scrollTop()<3*h))
  {
    whitelist('work'); 
  }  
  else if(($(window).scrollTop()>=3*h)&&($(window).scrollTop()<4*h))
  {
    whitelist('award'); 
  }
  else if(($(window).scrollTop()>=4*h)&&($(window).scrollTop()<5*h))
  {
    whitelist('code');
  }
  else if(($(window).scrollTop()>=5*h))
  {
    whitelist('me'); 
  } 
  // console.log(scrollamt);
  // showing or hiding scrolltotop 

  if($(window).scrollTop()<(h*0.75)){
    $('#scrolltotop').hide();
    $('#thenav').removeClass('fadeInDown').addClass('fadeOutUp');

  } 
  else{
    $('#scrolltotop').show();
    $('#thenav').removeClass('fadeOutUp').addClass('fadeInDown');
    $('#thenav').show();
  } 

}
$(document).ready(function(){


$(window).scroll(function(evt){
  refreshnav();
});

  
});
