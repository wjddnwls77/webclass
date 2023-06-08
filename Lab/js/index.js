$(document).ready(function(){

    // MENU

    $(".btnMenu").click(function(){

        if($(".gnb").hasClass("on")==false){
            $(".gnb").addClass("on")
        }else{
            $(".gnb").removeClass("on")
        }
    })
    
    $(".menu>li").click(function(e){
        e.preventDefault()
        if($(this).hasClass("on")==true){
            $(this).css("height","50px")
            $(this).removeClass("on")
        }else{
            $(".menu>li").css("height","50px")
            $(".menu>li").removeClass("on")
            let li2dep = $(this).children("ul").children().length
            $(this).css("height",(li2dep+1)*50+"px")
            $(this).addClass("on")
        }
        
    })
    
    $(".menu ul").click(function(){
        return false
    })

    // MAIN PAGE SLIDER_1
    
    let count = 0;
    // 다음 버튼을 눌렀을 때
    $(".btnNext").click(function(){
        count++;
        if(count>1){count = 0}
        slideMove(count)
        $(".mainTrain>li").removeClass("on")
        $(".mainTrain>li").eq(count).addClass("on")

    })



    
    //BEST SELLERS SLIDE
    















})