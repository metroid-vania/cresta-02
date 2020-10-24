/* smooth-scroll js */
var scroll = new SmoothScroll('a[href*="#"]', {
  header: '.header',
  speedAsDuration: true,
  speed: 500,
  easing: 'easeInOutQuint'
});

/* swiper js */
$(function () {
  let swipeOption = {
    loop: true, // エンドレスリピートさせる
    effect: 'fade', // これがフェードのオプション
    autoplay: {
      delay: 4000, // 自動再生スピード
      disableOnInteraction: false // ユーザが指やスマホでスライダーに触った時、スライドを止めないように設定するオプション
    },
    speed: 2000
  };
  new Swiper('.swiper-container-mv', swipeOption);
});

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

/* ヘッダーカラーの変更 */
$(window).on('scroll', function () {
  if ($(this).scrollTop() > $('.mv').height() - $('.header').height()) {
    $('.header').css('background-color', '#333');
  } else {
    $('.header').css('background-color', 'transparent');
  }
});

/* Safari(iOS) 対策 */
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setFillHeight); // 画面のサイズ変動があった時に高さを再計算する

setFillHeight(); // 初期化
