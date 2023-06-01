
"use strict";

$(".success").click(function(){
  $(".alert-animate").animate({opacity:'1',right: '20px'},200);
});
var path = window.location.pathname;
var page = path.split("/").pop();
if (page == "transaction.html") {
  $(function() {
    var start = moment().subtract(29, 'days');
    var end = moment();
    function cb(start, end) {
      $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);
    cb(start, end);
  });
}

// Theme change
document.querySelector('#switch').addEventListener('click', function() {
  var wasDarkMode = localStorage.getItem('dark') === '1';
  localStorage.setItem('dark', wasDarkMode ? '0' : '1');
  document.documentElement.classList[wasDarkMode ? 'remove' : 'add']('dark');
});

var wasDarkMode = localStorage.getItem('dark');

if (wasDarkMode === '1') {
  $( '#flexSwitchCheckDefault' ).prop( "checked", true )

} else {
  $( '#flexSwitchCheckDefault' ).prop( "checked", false )
}
 
// header profile dropdown
$(document).ready(function () {
  $(".notification-drop").on('click', function (event) {
 
    event .stopPropagation();
    $(this).find('.open-notify').toggle();
  });
  $(".open-notify").on("click", function (event) {
    event.stopPropagation();
  });
  $(document).on("click", function () {
    $(".open-notify").hide();
  });
});
 
// Side Navbar

  var menu_btn = document.querySelector("#menu-btn");
  var sidebar = document.querySelector("#sidebar");
  var container = document.querySelector(".my-container");
  menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
  });
  $('.containt-parent').on('click', function () {
    $('#sidebar').addClass('active-nav');
  })

if ($(window).width() < 992) {
  $(document).ready(function () {
    $(".input-btn").on('click', function (event) {
      event.stopPropagation();
      $(".input-search").toggle();
    });

    $(".input-search").on("click", function (event) {
      event.stopPropagation();
    });
    $(document).on("click", function () {
      $(".input-search").hide();
    });
  });
}

// select2
$(document).ready(function () {
  $('.select2').select2();
});

// selcetbox color chang from option select
$('.list-parrent').change(function () {
  $(this).closest('.param-ref').find('.select2-container .select2-selection--single').css('background', '#F3F2FF');
})

// dropdown list with filter and images
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

if (selected !== null) {
  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    document.querySelector('#search').value = "";
    document.querySelector('#search').dispatchEvent(new Event('keyup'));
  });

  optionsList.forEach(option => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
}

if (document.querySelector('.search-list') !== null) {
  var input = document.querySelector('#search');
  var items = document.querySelector('.search-list').getElementsByTagName('li');

  input.addEventListener('keyup', function (ev) {
    var text = ev.target.value;
    var pat = new RegExp(text, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (pat.test(item.innerText)) {
        item.classList.remove("hidden");
      }
      else {
        console.log(item);
        item.classList.add("hidden");
      }
    }
  });
}

// Bs-5 tooltip
$(document).ready(function () {
  $('[data-bs-toggle=tooltip]').tooltip();
});

// input field border
$('.apply-bg').on('change', function () {
  this.setAttribute('value', this.value);
});

// Choose file interaction
$('#formFileMultiple').on('change', function () {
  if (document.getElementById("formFileMultiple").files.length == 1) {
    $('#formFileMultiple').addClass("input-bg");
  } else {
    $('#formFileMultiple').removeClass("input-bg");
    $('#formFileMultiple').addClass("upload-filed");

  }
});
$('#formFileMultiple2').on('change', function () {
  if (document.getElementById("formFileMultiple").files.length == 1) {
    $('#formFileMultiple2').addClass("input-bg");
  } else {
    $('#formFileMultiple2').removeClass("input-bg");
    $('#formFileMultiple2').addClass("upload-filed");

  }
});
// Transaction
$(document).ready(function () {
  $(".fil-btn").on('click', function () {
    $(this).find('img').toggle();
    $(".filter-panel").slideToggle(300);
  });
});
$(document).ready(function () {
  $("select.withdraw-type").change(function () {
    var selectedCountry = $(".withdraw-type option:selected").text();
    if (selectedCountry == "Bank") {
      // alert("bank");
      $('#bankForm').removeClass("d-none"); 
      $('#bankForm').addClass("d-block");

      $('#emaildiv').removeClass("d-block");
      $('#emaildiv').addClass("d-none");

      $('#paypalForm').removeClass("d-block");
      $('#paypalForm').addClass("d-none");
      $('#cryptoForm').removeClass("d-block");
      $('#cryptoForm').addClass("d-none");

    } else if (selectedCountry == "Paypal") {
      // alert("Paypal");
      $('#paypalForm').removeClass("d-none");
      $('#paypalForm').addClass("d-block");

      $('#bankForm').removeClass("d-block");
      $('#bankForm').addClass("d-none");
      $('#cryptoForm').removeClass("d-block");
      $('#cryptoForm').addClass("d-none");
    }
    else if (selectedCountry == "Crypto") {
      // alert("Crypto");
      $('#cryptoForm').removeClass("d-none");
      $('#cryptoForm').addClass("d-block");

      $('#bankForm').removeClass("d-block");
      $('#bankForm').addClass("d-none");
      $('#paypalForm').removeClass("d-block");
      $('#paypalForm').addClass("d-none");
    }
  });
});
//profile camera button

$(function () {
  $("#upload_link").on('click', function (e) {
    e.preventDefault();
    $("#upload:hidden").trigger('click');
  });
});

//progreessbar with time
function startTimer(duration, display, bar) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    var totalSeconds = 1 * 60,
      remainingSeconds = minutes * 60 + seconds
    bar.style.width = (remainingSeconds * 100 / totalSeconds) + "%";

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var eid = $("#demo1").attr("id");
  if (eid) {
    var minutes = 60 * 1,
      display = document.querySelector('#time');
    bar = document.querySelector('#progressBar');
    startTimer(minutes, display, bar);
  }
  else { }
};
function myFunction(e) {
  e.preventDefault();
}
// slight update to account for browsers not supporting e.which

$(document).ready(function () {
  $("#copied-client").on('click', function (event) {
    event.preventDefault();
    $('#copy-parent-div-client').addClass('show-copied');
    setInterval(remove_copy, 5000);
    var copyText = document.getElementById("client-input");
    navigator.clipboard.writeText(copyText.value);
    console.log('copied');
  });
});


function remove_copy() {
  $('#copy-parent-div-client').removeClass('show-copied');
}

$(document).ready(function () {
  $("#copied-client-secret").on('click', function (event) {
    event.preventDefault();
    $('#copy-parent-div-client-secret').addClass('show-copied');
    setInterval(remove_copy_secret, 5000);
    var copyText = document.getElementById("client-input-secret");
    navigator.clipboard.writeText(copyText.value);
    console.log('copied');
  });
});

function remove_copy_secret() {
  $('#copy-parent-div-client-secret').removeClass('show-copied');
}

$(document).ready(function () {
  $("#click-to-copy").on('click', function (event) {
    event.preventDefault();
    $('#copy-parent-div').addClass('show-copied');
    setInterval(show_copy, 5000);
    var copyText = document.getElementById("input-form-copied");
    navigator.clipboard.writeText(copyText.value);
    console.log('click');
  });
});

$(document).ready(function () {
  $("#copied").on('click', function (event) {
    event.preventDefault();
    $('#copy-parent-div').addClass('show-copied');
    setInterval(show_copy, 5000);
    var copyText = document.getElementById("myInput");
    navigator.clipboard.writeText(copyText.value);
  });
});

function show_copy() {
  $('#copy-parent-div').removeClass('show-copied');
}
// text area focus control
$(document).ready(function () {
  $(".form-control").blur(function () {
    if ($(this).val() == '') {
      $(this).removeClass('not-focus-bg');
      $(this).addClass('focus-bgcolor');
    } else {
      $(this).removeClass('focus-bgcolor');
      $(this).addClass('not-focus-bg');
    }
  });
});

$(document).ready(function () {
  $("#generate-form").on('click', function (event) {
    event.preventDefault();
    $(".generate-section").addClass("di-none");
    $(".merchant-qr-section").removeClass("di-none");
  })
});

//icon rotate
$(".rotate").click(function () {
  $(this).toggleClass("down");
})
// password hide and show
$("#eye-icon-show").click(function () {
  $(this).addClass('di-none');
  $("#eye-icon-hide").removeClass('d-none');
  $("#eye-icon-hide").addClass('d-block');
  $('#show_hide_password input').attr('type', 'text');
})
$("#eye-icon-hide").click(function () {
  $(this).removeClass('di-block');
  $(this).addClass('d-none');
  $("#eye-icon-show").removeClass('di-none');
  $("#eye-icon-show").addClass('di-block');
  $('#show_hide_password input').attr('type', 'password');
})

//upload pdf button
$(document).ready(function ($) {
  $(".uploadlogo").change(function () {
    var filename = readURL(this);
    $(this).parent().children('span').html(filename);
  });
  function readURL(input) {
    var url = input.value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (
      ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "pdf"
    )) {
      var path = $(input).val();
      var filename = path.replace(/^.*\\/, "");
      return filename;
    } else {
      $(input).val("");
      return "Only image/pdf formats are allowed!";
    }
  }
});
var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "settings.html") {
  setInterval(hidetoast, 1000);
}

function hidetoast() {
  $('.loti').addClass('loti-opacity');
}

  var langs = localStorage.getItem('langs');
  if (langs == 'arabic'){
    $("html").removeAttr("dir", "rtl");
    $("html").attr("dir", "rtl");
  }
  else{
    $("html").removeAttr("dir", "rtl");
  }

  $("#select_language").on("change", function(){
    if($("#select_language select").val() == 'ar'){
      $("html").attr("dir", "rtl");
      localStorage.setItem('langs','arabic');
    }
    else{
      $("html").removeAttr("dir", "rtl");
      localStorage.removeItem('langs','arabic');
    }
  });

var langSelect = localStorage.getItem('selected');
if (langSelect) { 
  $(".selectParent .select2").val(langSelect);
}
    
$(".selectParent .select2").on('change',function() {
  localStorage.setItem('selected', $(this).val());
});
// Popoverse
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});

jQuery(function($) {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $(".show-tooltip").hover(function() {
    $(".tooltip").attr('data-color', $(this).data("color"));
  });
});

// component js
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alerts alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, you triggered this alert message!', 'success')
  })
}

$(".sendButton").click(function(){
  $(".custom-alert-one .alert").show('medium');
  setTimeout(function(){
    $(".custom-alert-one .alert").hide('medium');
  }, 5000);
});
$(".sendButton .close").click(function(){
    $(".custom-alert-one .alert").hide('medium');
});


