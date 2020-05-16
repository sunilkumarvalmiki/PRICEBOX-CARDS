$(document).ready(function () {
  $('#card').hide('fast');
  $('#card2').hide('fast');
  $('#card3').hide('fast');
  $('#card4').hide('fast');
  $('#card-head-free').show();
  $('#card-head-basic').show();
  $('#card-head-standard').show();
  $('#card-head-premium').show();
  $('.card-head-free').addClass('head-border');
  $('.card-head-basic').addClass('head-border');
  $('.card-head-standard').addClass('head-border');
  $('.card-head-premium').addClass('head-border');
});

$('.card').hover(
  function () {
    $('#card').show();
    $(this).addClass('free');
    $('.card-head-free').removeClass('head-border');
    $(this).addClass('borderClass');
  },
  function () {
    $('.card-head-free').addClass('head-border');
    $(this).removeClass('borderClass');
    $('#card').hide();
    $(this).removeClass('free');
  }
);

$('.card2').hover(
  function () {
    $('#card2').show();
    $(this).addClass('basic');
    $('.card-head-basic').removeClass('head-border');
    $(this).addClass('borderClass');
  },
  function () {
    $('.card-head-basic').addClass('head-border');
    $(this).removeClass('borderClass');
    $('#card2').hide();
    $(this).removeClass('basic');
  }
);

$('.card3').hover(
  function () {
    $('#card3').show();
    $(this).addClass('standard');
    $('.card-head-standard').removeClass('head-border');
    $(this).addClass('borderClass');
  },
  function () {
    $('.card-head-standard').addClass('head-border');
    $(this).removeClass('borderClass');
    $('#card3').hide();
    $(this).removeClass('standard');
  }
);

$('.card4').hover(
  function () {
    $('#card4').show();
    $(this).addClass('premium');
    $('.card-head-premium').removeClass('head-border');
    $(this).addClass('borderClass');
  },
  function () {
    $('.card-head-premium').addClass('head-border');
    $(this).removeClass('borderClass');
    $('#card4').hide();
    $(this).removeClass('premium');
  }
);

$('.card-head-free').hover(function () {
  $(this).removeClass('borderClass');
});

$('.card-head-basic').hover(function () {
  $(this).removeClass('borderClass');
});

$('.card-head-standard').hover(function () {
  $(this).removeClass('borderClass');
});

$('.card-head-premium').hover(function () {
  $(this).removeClass('borderClass');
});
