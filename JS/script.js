var swiper = new Swiper(".room-swiper", {
  spaceBetween: 24,
  slidesPerGroup: 1,
  // centeredSlides: true,
  loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1920:{
      slidesPerView: 2.9,
    },
    1024:{
      slidesPerView: 1.5,
    },
    1440:{
      slidesPerView:2.2,
    },
    768: {
      slidesPerView: 1,
    },

    0:{
      // slidesPerView:1,
      // centeredSlides: true,
    },
  }
});





// TIPS SLIDER

 new Swiper(".tips--swiper", {
   navigation: {
      nextEl: ".tips-swiper-button-next",
      prevEl: ".tips-swiper-button-prev",
    },

    breakpoints: {
      1440:{
        slidesPerView:3,
      },
      768:{
        slidesPerView: 1.5,
        touchRatio:3,

      },
      0:{
        slidesPerView:1.1,
        touchRatio:3,

      },
    },
   
   slidesPerView: 3,
   spaceBetween: 30,
   centeredSlides: true,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });


 var swiper = new Swiper(".header-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".header-swiper-button-prev",
    prevEl: ".header-swiper-button-next",
  },

  breakpoints:{
    0:{
      slidesPerView:1.01,
    },
    768:{
      slidesPerView:1.2,

    },
    1024:{
      slidesPerView:2,
    },
  },
});


let win = $(window).width();

if(win >= 1024){
  Ourswiper.deleted()
}
var Ourswiper = new Swiper(".our-products__item--container", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop:true,
  centeredSlides:true,
  pagination: {
    clickable: true,
  },
  breakpoints:{
    0:{
  slidesPerView: 1.3,

    },
    425:{
      slidesPerView: 1.4,
    
        },

    768:{
    slidesPerView: 2.5,

    }
  }
});
    






 $(document).ready(function () {



  let header = $('.header');
  let hederHeight = header.height(); // вычисляем высоту шапки
  console.log(win);

 if(win >= 0){
     
  $(window).scroll(function() {
    if($(this).scrollTop() > 50) {
     header.addClass('header_fixed');
     $('body').css({
        'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
     });
    } else {
     header.removeClass('header_fixed');
     $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
  });
 };


// function customClickOutsideCallback(selector, callback) {
//   $(document).on("mouseup", function (e) {
//     const isSelector = $(e.target).is(selector);
//     const hasParent = $(e.target).closest(selector).length;

//     if (!isSelector && !hasParent && typeof callback === "function") {
//       callback(e, selector);
//     }
//   });
// }

// customClickOutsideCallback('.block', function(e, selector) {
//   console.log(Click outside of "${selector}");
// });

 $('.header-menu__container').on('click', function(e){
   e.preventDefault();
   if($(this).children('.header-menu').hasClass('header-h')){
     $(this).children('.header-menu').removeClass('header-h');
     $(this).find('.header-menu__img').removeClass('header-arrow');
   }else{ 
    $('.header-menu').removeClass('header-h');
    $(this).children('.header-menu').addClass('header-h');
    $('.header-menu__img').removeClass('header-arrow')
    $(this).find('.header-menu__img').addClass('header-arrow');
   };
   });



 });
