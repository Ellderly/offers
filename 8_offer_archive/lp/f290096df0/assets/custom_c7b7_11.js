$(document).ready(function() {
    'use strict';
    $('.test-step .next-btn').on('click', function(e) {
        e.preventDefault();
        let blockCase = $(this).parents('.test-step');
        let radio = blockCase.find('[type=radio]');

        var radioDone = false;

        if (radio.length > 0) {
            radio.each(function(index, element) {
                if ($(element).is(':checked')) {
                    radioDone = true;
                }
            });

            if (!radioDone) {
                radio.each(function(index, element) {
                    $(element).parents('label').addClass('border-danger');
                });

                return;
            }
        }

        blockCase.fadeOut(500);
        setTimeout(function() {
            blockCase.next().addClass("active");
        }.bind(this), 800)
    })
    let arr = [];
    let answer = document.querySelector('input[name="answer"]');
    $('.test-step label.radio').one('click', function(e) {
       let ans = $(this).find('.answer__title').text();
        arr.push(ans);
        answer.value = arr;
        setTimeout(function() {
            $(this).parents('.test-step').fadeOut(500);
        
            setTimeout(function() {
                $(this).parents('.test-step').next().addClass("active");
            }.bind(this), 800)
        }.bind(this), 500)
    })
    $('#video_main').on('click', function(e) {
        $('#video_player').prop('muted', false);
    })


    $('.test-step .prev-btn').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.test-step').prev().addClass('active');
        $(this).parents('.test-step').removeClass('active');
    })
})