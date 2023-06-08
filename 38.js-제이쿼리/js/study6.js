$(document).ready(function(){


    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let con2top = $(".con2").offset().top
        if(winst>=con2top){
            $(".con2").addClass("on")
        }else{
            $(".con2").removeClass("on")
        }
    })

    //console 창에서 origibakEvent->wheelDelta:(-)120 값을 확인할 수 있음 위로 올렸는지 아래로 내렸는지.firefox에서는 detail (-)3 크롬이랑 다르게 나와서 맞춰야함.
    // .on 이라는 함수는 여러 이벤트를 묶어줄수 있음 "wheel click.."

    // $(".wrap>div").click(function(){}) = 아래거랑 같음
    $(".wrap>div").on("wheel DOMMouseScroll",function(event){
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40
        }else{
            delta = E.wheelDelta
        }
       
    

        if(delta<0){
            //마우스 휠을 내렸을 때
        if($(this).next().length!=0){
            let posTop = $(this).next().offset().top
            console.log(posTop)
            $("html,body").stop().animate({scrollTop:posTop},1000)
            }

        }
        else{
            //마우스 휠을 올렸을 때
        if($(this).prev().length!=0){
            let posTop = $(this).prev().offset().top
            console.log(posTop)
            $("html,body").stop().animate({scrollTop:posTop},1000)}
        } 
        return false
    })



})