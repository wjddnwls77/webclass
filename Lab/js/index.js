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

    
    //BEST SELLERS SLIDE
    















})