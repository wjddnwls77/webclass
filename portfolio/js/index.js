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
// start 효과
    setTimeout(function(){
        $(".start").addClass("on")
    },1000)
    
 //프로필 페이지 효과
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let introPro = $(".introPro").offset()
        let proHeight = $(window).height()*0.7
        if(winst+proHeight>=introPro){
            $(".proD>li").addClass("on")
        }else{
            $(".proD>li").removeClass("on")
        }
    })

// profilePage
$(window).scroll(function(){
    let winScroll = $(window).scrollTop()
    let win = $(".profileBox").offset().top
    let winHeight = $(window).height()*1.5

    if(winScroll+winHeight>=win){
        console.log(".profileBox")
        if($(".profileBox").hasClass("on")==false){
            $(".profileBox").each(function(){
                $(".profileBox>li").addClass("on")
            })
        }
}

})

//  메뉴
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
$(`.gnb>li`).click(function(){
    $(`nav`).removeClass(`on`)
    $(".menu").removeClass("on")
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



//skill 효과

$(`.clickBtn`).click(function(e){
    if($(this).hasClass("on") == false){
        e.preventDefault
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


// 웹 디자인 기획서 keyword

$(".keyword>li").click(function(){
$(".keyword>li").removeClass(`on`)
$(this).addClass(`on`)
})


//popup Slider
        let popupSlider = new Swiper('.Popup,.Banner', {
            // direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: true,
        pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
        
        });


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

    
        $(".popupContent>a").click(function(e){
            e.preventDefault()
            $(".Popup").addClass("on")
            $(".artTebmenu").addClass("on")
            $(".blackcover").addClass("on")
        })
        $(".exit").click(function(){
            $(".Popup").removeClass("on")
            $(".artTebmenu").removeClass("on") 
            $(".blackcover").removeClass("on")
        })
        
        $(".bannerContent>a").click(function(e){
            e.preventDefault()
            $(".Banner").addClass("on")
            $(".artTebmenu").addClass("on") 
            $(".blackcover").addClass("on")
        })
        $(".bannerexit").click(function(){
            $(".Banner").removeClass("on")
            $(".artTebmenu").removeClass("on") 
            $(".blackcover").removeClass("on")
        })
        $(".folder_4").click(function(e){
            e.preventDefault()
            $(".artTebmenu").addClass("on")
            $(".artworkfolder").addClass("on") 
            $(".blackcover").addClass("on")
        })
        $(".artexit").click(function(){
            $(".artworkfolder").removeClass("on")
            $(".artTebmenu").removeClass("on") 
            $(".blackcover").removeClass("on")
        })


// weball Slider
        $('.artTebmenu>dt').click(function(e){
            e.preventDefault()
            $(".artTebmenu>dt").removeClass("on")
            $(this).addClass("on")
    
            $(".artTebmenu>dd").removeClass("on")
            $(this).next().addClass("on")
        })
// 

    // btnTop 을 클릭하면 스크롤바가 가장 최상단으로 부드럽게 이동될 수 있도록
    $(".btnTop").click(function(){
    // $("html,body").stop().animate({scrollTop:0},1000)
        // moveScroll(0,2000)
        moveScroll({
            top:0,
            speed:1500
        })
    })

    $(window).scroll(function(){
        //스크롤바가 움직일 때마다 실행되는 소스코드
        let winTop = $(window).scrollTop()
        //스크롤바가 위에서 얼만큼 내려와 있는지를 계산

        //윈도우스크롤이 400이상으로 내려가면 header태그의 스타일이 작은 스타일이 되고,
        //그렇지 않다면 기본스타일이 적용될 수 있도록
        if(winTop>400){
            $(".nav>li").addClass("on")
        }else{
            $(".nav>li").removeClass("on")
        }
    })

    

   //각각의 메뉴리스트를 클릭했을 때 해당되는 영역으로 부드럽게 스크롤 이동될 수 있도록
    $(".nav>li>a").click(function(e){
        e.preventDefault()
        //a태그가 갖고 있는 기본기능 제어
        let target = $(this).attr("href")
       //클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target 변수에 저장된다.(문자데이터 형태로 "#s1""#s2"...)
        let target_top = $(target).offset().top
        // $("html,body").stop().animate({scrollTop:target_top},1000)
        // moveScroll(target_top,2000)
        moveScroll({top:target_top,speed:1000})
    })

    // function moveScroll(top,speed){
    //     $("html,body").stop().animate({scrollTop:top},speed)
    // }


    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)
    }

    // $(".wrap>div").on("wheel DOMMouseScroll",function(event){
    //     // console.log(event) 호환성을 위한것이라 수정할 일이 없다.
    //     let E = event.originalEvent
    //     let delta = 0;
    //     if(E.detail){
    //         delta = E.detail * -40
    //     }else{
    //         delta = E.wheelDelta
    //     }
    //     if(delta<0){
    //         //마우스 휠을 내렸을 때
    //     if($(this).next().length){
    //         let posTop = $(this).next().offset().top
    //         $("html,body").stop().animate({scrollTop:posTop},1000)
    //         }

    //     }
    //     else{
    //         //마우스 휠을 올렸을 때
    //     if($(this).prev().length!=0){
    //         let posTop = $(this).prev().offset().top
    //         $("html,body").stop().animate({scrollTop:posTop},1000)}
    //     } 
    //     return false
    // })

    
    $("#introtxt path").each(function(){
        let path =$(this)
        let idx = path.index()
        let secondTerm = 0.2
        let delay = idx*secondTerm
        console.log(idx)
        let pathLength = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLength)
        $(this).css("stroke-dashoffset",pathLength)

        setTimeout(function(){
            path.css("transition",`stroke-dashoffset 0.3s ease ${delay}s, fill 0.5s ease ${delay+1}s`)
        },500)

        
    })

    setTimeout(function(){
        $("#introtxt").addClass("on")
    },800)
    setTimeout(function(){
        $("header>p").addClass("on")
    },5000)







    })