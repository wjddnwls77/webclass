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
        
         }
     })
     
     // profilePage
     $(window).scroll(function(){
         let winScroll = $(window).scrollTop()
         let win = $(".profileBox").offset().top
         let winHeight = $(window).height()*0.9
 
         if(winScroll+winHeight<=win){
             console.log(".profileBox")
             if($(".profileBox").hasClass("on")==false){
                 $(".profileBox").each(function(){
                     $(".profileBox>li").addClass("on")
                  })
             }
     }
 
 })
 
 
     // skill
     // console.log(s1Length)
     // $(`.circleBtn`).click(function(){
     //     $(`.s1`).addClass(`on`)
     // })
    
     // $(window).scroll(function(){
     //     let skillScroll = $(window).scrollTop()
     //     let skillWin = $(".skill").offset().top
     //     let skillHeight = $(window).height()*0.2
     //     if(skillScroll+skillHeight<=skillWin){
     //             $(".skillBox").addClass("on")
 
             
     //     }
 
     // })
 
     $(`.clickBtn`).click(function(){
         if($(this).hasClass("on") == false){
             $(`.skilltxt`).addClass("on")
             $(".skill>ul>li>figure").addClass("on")
             $(this).addClass("on")
 
             $(".skillBox>li").each(function(){
                 let list = $(this)
                 let percent = $(this).find(".per2").text()
                 let count = 0
                 // let cirlceLength = $("circle").get(0).getTotalLength()
                 let circle = $(this).find("circle")
                 let timer = setInterval(function(){
                     count++
                     list.find(".per").text(count)
                     circle.css("stroke-dashoffset",470.4-(470.4*(count/100)))
                     if(count>=percent){
                         clearInterval(timer)
                     }
                 },30)
             })
         }else{
             $(`.skilltxt`).removeClass("on")
             $(".skill>ul>li>figure").removeClass("on")
             $(this).removeClass("on")
 
             $(".skillBox>li").each(function(){
                 let list = $(this)
                 let percent = $(this).find(".per").text() //지금 보이는 숫자
                 let percent2 = $(this).find(".per2").text() //각자의 수
                 let count = percent
                 let count2 = percent2
                 let circle = $(this).find("circle")
                 let circleper = $(this).find("circle").css(`stroke-dashoffset`)
  
                 let timer = setInterval(function(){
                     count--
                     list.find(".per").text(count)
                     circle.css("stroke-dashoffset",circleper+(470.4*(count/100)))
                     console.log(circleper)
                     if(count<=0){
                         clearInterval(timer)
                     }
                 },30)
 
             })
         }
 
     })
 
 
     // $(`.clickBtn`).click(function(){
     //     $(`.skilltxt>h2`).addClass("on")
     //     $(`.skilltxt>p`).addClass("on")
     //     $("figure").addClass("on")
 
     // })
     // start animation
     
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
$().click(function(){
    
})





 })