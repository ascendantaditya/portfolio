$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  
  //  typing text
  var toggle = document.getElementById("theme-toggle");
  
  var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
  
  
  toggle.onclick = function() {
     
      var currentTheme = document.documentElement.getAttribute("data-theme");
      var targetTheme = "light";
  
      if (currentTheme === "light") {
          targetTheme = "dark";
      }
  
      document.documentElement.setAttribute('data-theme', targetTheme)
      localStorage.setItem('theme', targetTheme);
  };