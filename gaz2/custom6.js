$(document).ready(function() {
	'use strict';

    $('.test-step label.radio').on('click', function(e) {
      e.preventDefault();
          setTimeout(function (){
              $(this).parents('.test-step').fadeOut(1000);
              setTimeout(function (){
                  $(this).parents('.test-step').next().addClass("active");
              }.bind(this), 1300)
          }.bind(this), 1000)
    })
    $('.test-step label.radio').on('click', function(e) {
      $(this).addClass('bg-color');
      $('.test-step.active .notification').addClass('active');
      setTimeout(function (){
          $('.test-step .notification').removeClass('active');
          $(this).parents('.test-step').fadeOut(500);
          setTimeout(function (){
              $(this).parents('.test-step').next().addClass("active");
          }.bind(this), 800)
      }.bind(this), 2000)
})

$('.test-step .next-btn').on('click', function(e) {
  e.preventDefault();
    $(this).parents('.test-step').fadeOut(500);
    setTimeout(function (){
        $(this).parents('.test-step').next().addClass("active");
    }.bind(this), 800)
})

    $('#video_main').on('click', function(e) {
        $('#video_player').prop('muted', false);
    })

    // $('.next-btn').on('click', function(e) {
    //   $('.header1').removeClass('active');
    // })

    $('.next-btn').on('click', function(e) {
      e.preventDefault();
        $('.header1').fadeOut(500);
        setTimeout(function (){
            $('.header1').removeClass("active");
        }.bind('.header1'), 800)
    })

    // $('.last-btn').on('click', function(e) {
    //   e.preventDefault();
    //     $('.header1').fadeOut(500);
    //     setTimeout(function (){
    //         $('.header1').addClass("active");
    //         $('.header1').addClass("header-border");
    //     }.bind('.header1'), 800)
    // })

  $('.test-step .prev-btn').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.test-step').prev().addClass('active');
    $(this).parents('.test-step').removeClass('active');
    $(this).parents('.header1').removeClass('active');
  })
})


