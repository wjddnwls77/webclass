$(document).ready(function(){

    $(".list>li").each(function(){
        let red = Math.random()*255;
        let green = Math.random()*255;
        let blue = Math.random()*255;

        $(this).css("background","rgb("+red+","+green+","+blue+")")

        let tagTop = $(this).offset().top
        // let tagTop={left:0,top:0}
        $(this).text("저는 전체 문서기준 위에서"+tagTop+" 만큼 떨어진 곳에 있습니다.")
        $(this).addClass("on")
    })
})
//$(".list>li").addClass("on")