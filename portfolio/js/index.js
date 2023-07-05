$(document).ready(function(){



    // banner slider
    let bannerSlider = new Swiper(".bannerSlider",{
        breakpoints: {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
        //   navigation: {
        //       nextEl: ".btnNext",
        //       prevEl: ".btnPrev",
        //   },
        //   on: {
        //     slideChange: function () {
        //       console.log(this.activeIndex)
        //       $(".mainTrain>li").removeClass("on")
        //       $(".mainTrain>li").eq(this.activeIndex).addClass("on")
        //       $(".controlerMain>li").removeClass("on")
        //       $(".controlerMain>li").eq(this.activeIndex).addClass("on")
        //     }
        //   }
    })


}