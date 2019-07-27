$(document).ready(function () {

  // Home
  $('.home .home-img').ready(function () {
    setTimeout(function () {
      $('.home .home-img').addClass('home-from-zero');
    }, 300);
  });

  $('.slogan h1').each(function (i) {
    setTimeout(function () {
      setTimeout(function () {
        $('.slogan h1').eq(i).addClass('text-from-left');
      }, 350 * (i + 1));
    }, 300);
  });

  $('.home .action').ready(function () {
    setTimeout(function () {
      $('.home .action').addClass('action-from-bottom');
    }, 450 * 4);
  });

});

$(window).scroll(function () {

  var wScroll = $(this).scrollTop();

  $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());

  if (wScroll > $('#about').offset().top - 200) {
    $('.about .about-me').addClass('about-from-top');
  }

  if (wScroll > $('#contact').offset().top - 200) {
    $('.contact-list li').each(function (i) {
      setTimeout(function () {
        $('.contact-list li').eq(i).addClass('list-from-top');
      }, 200 * (i + 1));
    });
  }
});

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});