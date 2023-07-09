$(document).ready(function(){

// 전체 효과
$(window).scroll(function(){
    let winst = $(window).scrollTop()
    let winHeight = $(window).height()*0.7
    $(".mTtB,.mBtT,.mLtR").each(function(){
        if(winst+winHeight>$(this).offset().top){
            $(this).addClass("on")
        }else{
            $(this).removeClass("on")
        }
    })
})
    //popup slider
    let swiper = new Swiper('.popupStaion', {
        spaceBetween: 30,
        slidesPerView: 5,
        speed:2000,
      centeredSlides: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      
      });

      let popupSlider = new Swiper('.Popup', {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
      
      });

      //banner slider
    let banner_2 = new Swiper('.Banner', {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
      
      });

    //   phone
    $(".phone").click(function(){
        $(".Popup").addClass("on") 
        $(".blackcover").addClass("on")
    })
    $(".exit").click(function(){
        $(".Popup").removeClass("on")
        $(".blackcover").removeClass("on") 
    })

     //   webPlan
     $(".webplanning").click(function(e){
        e.preventDefault()
        $(".webPlan").addClass("on") 
        $(".blackcover").addClass("on")
    })
    $(".webexit").click(function(){
        $(".webPlan").removeClass("on") 
        $(".blackcover").removeClass("on")
    })

// banner slider

      let bannerSlider = new Swiper(".bannerSlider",{
        spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 2300,
        disableOnInteraction: false,
      },
     })

     $(".bannerTrain>li").click(function(e){
        e.preventDefault()
        $(".Banner").addClass("on") 
        $(".blackcover").addClass("on")
    })
    $(".bannerexit").click(function(){
        $(".Banner").removeClass("on") 
        $(".blackcover").removeClass("on")
    })
     
     // profilePage
     $(window).scroll(function(){
         let winScroll = $(window).scrollTop()
         let win = $(".profileBox").offset().top
         let winHeight = $(window).height()*1.5
 
         if(winScroll+winHeight<=win){
             console.log(".profileBox")
             if($(".profileBox").hasClass("on")==false){
                 $(".profileBox").each(function(){
                     $(".profileBox>li").addClass("on")
                  })
             }
     }
 
 })
//  nav
    $("#navbg line").each(function(){
        let navbg = $(this).get(0).getTotalLength()
        $(this).css(`stroke-dasharray`,navbg)
        $(this).css(`stroke-dashoffset`,navbg)
    })

    $(`.menu`).click(function(){
        if($(`nav`).hasClass(`on`) == false){
            $(`nav`).addClass(`on`)
            setTimeout(function(){
                $("#navbg line").each(function(){
                    $(this).css(`stroke-dashoffset`,0)
                })
            },500)
            $(".menu").addClass("on")
            
        }else{
            $(`nav`).removeClass(`on`)
            $(".menu").removeClass("on")
            
        }
        
    })
// 각 영역으로 이동 
    $(".gnb>li>a").click(function(e){
        e.preventDefault()
        //a태그가 갖고 있는 기본기능 제어
        let target = $(this).attr("href")
       //클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target 변수에 저장된다.(문자데이터 형태로 "#s1""#s2"...)
        let target_top = $(target).offset().top
        // $("html,body").stop().animate({scrollTop:target_top},1000)
        // moveScroll(target_top,2000)
        moveScroll({top:target_top,speed:1000})
    })
    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)
    }

    //프로필 페이지 효과
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let introPro = $(".introPro").offset().top
        let proHeight = $(window).height()*0.7
        if(winst+proHeight<=introPro){
            $(".proD>li").addClass("on")
        }else{
            $(".proD>li").removeClass("on")
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
                 let percent = Number($(this).find(".per2").text())
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
                //  let percent = $(this).find(".per").text() //지금 보이는 숫자
                //  let percent2 = $(this).find(".per2").text() //각자의 수
                //  let count = percent
                //  let count2 = percent2
                 let a = 470.4
                 let circle = $(this).find("circle")
                 let circleper = Number($(this).find("circle").css(`stroke-dashoffset`).replace("px",""))
                console.log(circleper)

                let count = 0;
                a-circleper
                let timer = setInterval(function(){
                    count++
                    circle.css("stroke-dashoffset",circleper+count)
                    if(count>a-circleper){
                        clearInterval(timer)
                    }
                },5)
                //  let timer = setInterval(function(){
                //      count--
                //      list.find(".per").text(count)
                //      circle.css("stroke-dashoffset",circleper+(470.4*(count/100)))
                //      console.log(circleper)
                //      if(count<=0){
                //          clearInterval(timer)
                //      }
                //  },30)
 
             })
         }


 
     })
 
 


     setTimeout(function(){
        $(".start").addClass("on")
     },1000)
    

// 웹 디자인 기획서 keyword

// $(".keyword>li").click(function(){
    

  
// })







 })