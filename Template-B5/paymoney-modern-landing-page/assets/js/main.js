"use strict";

$("#switch").on('click', function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(this).find('img').toggle();
        $("#switch").removeClass("switched");
        localStorage.setItem('theme', 'dark');
    }
    else {
        $("body").addClass("dark");
        $(this).find('img').toggle();
        $("#switch").addClass("switched");
        localStorage.setItem('theme', 'light');
    }
});

$(document).ready(function () {
  $('.select2').select2();
});
// Tooltip bootstrap5 js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// selcetbox color chang from option select
$('.list-parrent').on('change',function () {
  $(this).closest('.select2-extends').find('.select2-container .select2-selection--single').css('background', '#F3F2FF');
})
// user-selected  
$(document).ready(function(){
  $(".usertype-module").on('click',function(){
     $(".usertype-module").removeClass("user-selected");
     $(this).addClass("user-selected");
  });
});
// user-selected
$(document).ready(function(){
  $(".gateway").on('click',function(){
     $(".gateway").removeClass("gateway-selected");
     $(this).addClass("gateway-selected");
  });
});
// text area focus control
$(document).ready(function () {
  $(".form-control").on('blur',function () {
    if ($(this).val() == '') {
      $(this).removeClass('not-focus-bg');
      $(this).addClass('focus-bgcolor');
    } else {
      $(this).removeClass('focus-bgcolor');
      $(this).addClass('not-focus-bg');
    }
  });
});

$("#eye-icon-show").on('click',function(){
  $(this).removeClass('di-block');
  $(this).addClass('d-none');
  $("#eye-icon-hide").removeClass('d-none');
  $("#eye-icon-hide").addClass('d-block');
  $('#show_hide_password input').attr('type', 'text');
})
$("#eye-icon-hide").on('click',function(){
  $(this).addClass('d-none');
  $("#eye-icon-show").removeClass('d-none');
  $("#eye-icon-show").addClass('d-block');
  $('#show_hide_password input').attr('type', 'password');
})


var theme = localStorage.getItem('theme');

if(theme == 'dark') {
    $("body").removeClass("dark");
    $("img.moon").removeClass("img-none")
    $("img.sun").addClass("img-none")
    $("#switch").removeClass("switched");
} else {
    $("body").addClass("dark");
    $("img.sun").removeClass("img-none")
    $("img.moon").addClass("img-none")
    $("#switch").addClass("switched");
}

(function () {
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: true,
            loop: true
          },
          991: {
            items: 3,
            nav: true
          }
        }
      });
    };

    (function ($) {
      carousels();
    })(jQuery);
  })();

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 95) {
          $(".bg-white").addClass("shadow-sm");
        }
        else{
            $(".start-header").removeClass("shadow-sm");
        }
    })
  })
var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "stripe.html") {
  document.getElementById('iban').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  });
}
