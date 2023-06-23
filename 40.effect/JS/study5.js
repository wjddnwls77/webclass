$(document).ready(function(){
    //마우스를 움직이면 cursor클래스가 따라다니도록
    $(document).mousemove(function(event){
        let posX = event.clientX-15
        let posY = event.clientY-15
        console.log(posX,posY)
        $(".cursor").css("left",posX+"px")
        $(".cursor").css("top",posY+"px")
        $(".cursor").addClass("on")
        
        $(".cursorGuideBox").css("left",(posX+150)+"px")
        $(".cursorGuideBox").css("top",posY+"px")
    
    })
    // $(".wrap>section").click(function(){
    //     alert("test")
    // })
    //커서가 클릭되기 때문에 알림창이 안뜸.css 에서 point-events:none;사용

    $(".slider").mouseover(function(){
        $(".cursor").addClass("big")
       let txt =  $(".slider").attr("data-desc")
       $(".cursorGuideBox").text(txt)

    })

    $(".slider").mouseout(function(){
        $(".cursor").removeClass("big")
    })




})