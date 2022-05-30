window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#header_burger__inner').addEventListener('click', function() {
document.querySelector('#menu').classList.toggle('is-active')
    })
  })


  // аккордеон
//   $(function () {
//     $("#accordion").accordion();
//   });
//   $(".selector").accordion({
//     classes: {
//       "ui-state-active": "round:hover"
//     }
//   });

  // Свайпер
  const swiper = new Swiper('.swiper-container', {
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
      hide: true,
    },

  });
