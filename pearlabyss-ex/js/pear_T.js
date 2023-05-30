window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
     
        pagination: {
            el: '.swiper-pagination',
    },
    breakpoints:{
        280:{
            slidesPerView :1,
        },
        768:{
            slidesPerView :3,
        }
    }



})

    let noticeSlider = new Swiper(".notice_station",{

        pagination: {
            el: '.swiper-pagination',
          
    },
    breakpoints:{
        280:{
            slidesPerView :1,
        },
        768:{
            slidesPerView :4,
        }
    }
    


})

    
























//객체=> 어떤 사물을 표현하기 위해서 사용.

let person1 = {
    name: "정현진",
    age :38,
    score: {
        ko:100,
        en:90,
        math:100
    },
    friends : {
        oldfriends :['상수','시흥','현종'],
        schoolfriend:['규림','애리','민혁']
    }
}







}