$(document).ready(function(){

    $(".list>li").each(function(){
        let result =Math.round(Math.random())
        if(result){
            $(this).addClass("mlrt")
        }else{
            $(this).addClass("mrtl")
        }
    })

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        //스크롤바가 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.9
        //브라우저 화면의 높이를 계산
        console.log(winHeight)
        $(".mltr,.mrtl").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })




















})