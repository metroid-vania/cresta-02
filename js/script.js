/* ハンバーガー */
$(function () {
  $('.js-nav__toggle').click(function () {
    $('body').toggleClass('is-drawer-active');
    $('.nav__inner').toggleClass('is-drawer-active');
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });
});

/* アコーディオン */
$(function () {
  $('.js-accordion__title').on('click', function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass('is-open', 200);
  });
});

/* nav メニュー */
$(function () {
  $('.js-nav__link').on('click', function () {
    $('.js-nav__link').removeClass('current');
    $(this).addClass('current');
  });
});

/* トップへ戻るボタン */
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 120) {
    $('.js-floating').fadeIn();
  } else {
    $('.js-floating').fadeOut();
  }
});

/* Safari(iOS) 対策 */
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setFillHeight); // 画面のサイズ変動があった時に高さを再計算する
setFillHeight(); // 初期化

/* wow js */
new WOW().init();

/* swiper js */
var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
});

/* modaal */
$('.modal').modaal();

/* smooth-scroll js */
var scroll = new SmoothScroll('a[href*="#"]', {
  header: '.header',
  speedAsDuration: true,
  speed: 500,
  easing: 'easeInOutQuint'
});

/* mailform (autoKana js) */
(function ($) {
  $.fn.autoKana('.form__name_1', '.form__read_1', {
    katakana: false
  });
  $.fn.autoKana('.form__name_2', '.form__read_2', {
    katakana: false
  });
})(jQuery);

/* mailform (datetimepicker js) */
(function ($) {
  $('.form__schedule').datetimepicker({
    lang: 'ja'
  });
})(jQuery);
