$(function() {
  
  console.log('jQuery started');
  
  var offset = 300,
      navigationContainer = $('#cd-nav'),
      mainNavigation = navigationContainer.find('#cd-main-nav ul');
  
  //open and close the menu by clicking on the bottom "menu" link
  $('.cd-nav-trigger').on('click', function(){
    
      $(this).toggleClass('menu-is-open');
      mainNavigation.toggleClass('is-visible');

  });
  
  function checkMenu() {
    
    if( $(window).scrollTop() > offset ) {
      
      console.log('view fixed nav');
      
      navigationContainer.addClass('is-fixed');
      
    } else if ( $(window).scrollTop() <= offset ) {
      
      console.log('hide fixed nav');
      
      navigationContainer.removeClass('is-fixed');
      mainNavigation.removeClass('is-visible');
      $('.cd-nav-trigger').removeClass('menu-is-open');
      
    }
    
  }
  
  $(window).scroll(function(){
    
    checkMenu();
    
  });
  
});