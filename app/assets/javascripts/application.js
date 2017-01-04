// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


$(document).on('turbolinks:load', function() {

  // activer les liens internes, précédé par un #
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    // prendre le nom du lien, substr enleve le premier caractere qui est #
    var ou = $(this).attr("href").substr(1);
    // trouver le tag <a name=""> correspondant
    var saut = $("#"+ ou);
    // aller jusqu'à cet élément
    $('html, body').animate({
        scrollTop: saut.offset().top
    }, 1000);
  });

  $('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
  })

  $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 400) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-wagon").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-wagon").css("background-color", "transparent"); // if not, change it back to transparent
        }
      });

});
