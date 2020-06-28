$(function() {

    $('.bottom-block i').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('.bottom-block h3').offset().top }, 700);
        e.preventDefault();
    });

});

$(function() {
    $('.button-mix').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('h1').offset().top }, 700);
        $('.vs2').removeClass('vs2');
        $('.vs1').addClass('vs2');
        $('.right-panel img').addClass('vsv2');
        $('.no-act-blk2').removeClass('rvs2');
        $('.no-act-blk').addClass('rvs2');
        e.preventDefault();
    });
});

$(function() {

    $('#slow').on('click', function(e) {
        $('#slow').addClass('active');
        $('#middle').removeClass('active');
        $('#fast').removeClass('active');
        e.preventDefault();
    });

});


$(function() {

    $('#middle').on('click', function(e) {
        $('#middle').addClass('active');
        $('#slow').removeClass('active');
        $('#fast').removeClass('active');
        e.preventDefault();
    });

});



$(function() {

    $('#fast').on('click', function(e) {
        $('#fast').addClass('active');
        $('#slow').removeClass('active');
        $('#middle').removeClass('active');
        e.preventDefault();
    });

});



$(function() {

    $('.bottom-block2 i').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('.cont-form h4').offset().top }, 700);
        e.preventDefault();
    });

});



$(function() {

    $('.top-blk').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('header').offset().top }, 700);
        e.preventDefault();
    });

});


$('input[type="range"]').val(10).change();


// placeholder-focus
$(document).ready(function() {
    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});



// mobile-viewport
if (screen.width <= 500) {
    $('head').append('<meta name="viewport" content="width=500, user-scalable=0"/>');
} else {
    $('head').append('<meta name="viewport" content="width=device-width">');
}
$(window).on("orientationchange", function() {
    if (window.orientation == 0) // Portrait 
    {
        $('head').append('<meta name="viewport" content="width=device-width">');
    } else // Landscape 
    {
        $('head').append('<meta name="viewport" content="width=640">');
    }
});

$(function() {

    var $document = $(document);
    var selector = '[data-rangeslider]';
    var $element = $(selector);

    // For ie8 support
    var textContent = ('textContent' in document) ? 'textContent' : 'innerText';

    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value;
        var output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
        output[textContent] = value;
    }

    $document.on('input', 'input[type="range"], ' + selector, function(e) {
        valueOutput(e.target);
    });

    // Example functionality to demonstrate disabled functionality
    $document.on('click', '#js-example-disabled button[data-behaviour="toggle"]', function(e) {
        var $inputRange = $(selector, e.target.parentNode);

        if ($inputRange[0].disabled) {
            $inputRange.prop("disabled", false);
        } else {
            $inputRange.prop("disabled", true);
        }
        $inputRange.rangeslider('update');
    });

    // Example functionality to demonstrate programmatic value changes
    $document.on('click', '#js-example-change-value button', function(e) {
        var $inputRange = $(selector, e.target.parentNode);
        var value = $('input[type="number"]', e.target.parentNode)[0].value;

        $inputRange.val(value).change();
    });

    // Example functionality to demonstrate programmatic attribute changes
    $document.on('click', '#js-example-change-attributes button', function(e) {
        var $inputRange = $(selector, e.target.parentNode);
        var attributes = {
            min: $('input[name="min"]', e.target.parentNode)[0].value,
            max: $('input[name="max"]', e.target.parentNode)[0].value,
            step: $('input[name="step"]', e.target.parentNode)[0].value
        };

        $inputRange.attr(attributes);
        $inputRange.rangeslider('update', true);
    });

    // Example functionality to demonstrate destroy functionality
    $document
        .on('click', '#js-example-destroy button[data-behaviour="destroy"]', function(e) {
            $(selector, e.target.parentNode).rangeslider('destroy');
        })
        .on('click', '#js-example-destroy button[data-behaviour="initialize"]', function(e) {
            $(selector, e.target.parentNode).rangeslider({ polyfill: false });
        });

    // Example functionality to test initialisation on hidden elements
    $document
        .on('click', '#js-example-hidden button[data-behaviour="toggle"]', function(e) {
            var $container = $(e.target.previousElementSibling);
            $container.toggle();
        });

    // Basic rangeslider initialization
    $element.rangeslider({

        // Deactivate the feature detection
        polyfill: false,

        // Callback function
        onInit: function() {
            valueOutput(this.$element[0]);
        },

        // Callback function
        onSlide: function(position, value) {
            console.log('onSlide');
            console.log('position: ' + position, 'value: ' + value);
        },

        // Callback function
        onSlideEnd: function(position, value) {
            console.log('onSlideEnd');
            console.log('position: ' + position, 'value: ' + value);
        }
    });

});

$(function() {

    $('.slk1').on('click', function(e) {
        $('.tba1').addClass('active');
        $('.tba2').removeClass('active');
        $('.tba3').removeClass('active');
        $('.slk1').addClass('active');
        $('.slk2').removeClass('active');
        $('.slk3').removeClass('active');
        e.preventDefault();
    });

});


$(function() {

    $('.slk2').on('click', function(e) {
        $('.tba2').addClass('active');
        $('.tba1').removeClass('active');
        $('.tba3').removeClass('active');
        $('.slk2').addClass('active');
        $('.slk1').removeClass('active');
        $('.slk3').removeClass('active');
        e.preventDefault();
    });

});


$(function() {

    $('.slk3').on('click', function(e) {
        $('.tba3').addClass('active');
        $('.tba1').removeClass('active');
        $('.tba2').removeClass('active');
        $('.slk3').addClass('active');
        $('.slk1').removeClass('active');
        $('.slk2').removeClass('active');
        e.preventDefault();
    });

});


$(function() {
    $('.accordion_item').on('click', function(e) {
        $(this).toggleClass('active');
        e.preventDefault();
    });
});



function copyToClipboard() {
    var $temp = $("<input>");
    var $elem = $("#copy-text");
    $("body").append($temp);
    $temp.val($($elem).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert('Код успешно скопирован!');
}

$(function() {
   $('#copy-btn').on('click', copyToClipboard);
});
