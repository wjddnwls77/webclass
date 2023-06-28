$(document).ready(function(){
    // ******************TAB MENU******************
    // $(".skinSolution>*").addClass("mTtBaleady")

    $(".btnMenu,.btnMoMenu").click(function(){

        if($("nav").hasClass("on")==false){
            $("nav").addClass("on")
        }else{
            $("nav").removeClass("on")
        }
    })

    $(".gnb>li.down").click(function(){
        $(".gnb>li.down").addClass("on")
        $(".gnb>li.down").removeClass("on")
    })

    //********화살표2뎁스열기******* */
    // $(".menu>li .depi").click(function(e){
    //     e.preventDefault()
    //     let _this = $(this).parent().parent()
    //     if(_this.hasClass("on")==true){
    //         _this.css("height","50px")
    //         _this.removeClass("on")
    //     }else{
    //         $(".menu>li").css("height","50px")
    //         $(".menu>li").removeClass("on")
    //         let li2dep = _this.children("ul").children().length
    //         _this.css("height",(li2dep+1)*50+"px")
    //         _this.addClass("on")
    //     }
    //     return false;
        
    // })
    
    // $(".menu ul").click(function(){
    //     return false
    // })
    //********************SCROLL******************
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        console.log(winst)
        let winHeight = $(window).height()*0.7
        $(".mTtB,.mTtBaleady,.mLtR,.mBtT,.mRtL").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })
    //********************BTNTOP******************
    $(".btntop").click(function(){
         moveScroll({
             top:0,
             speed:1000
         })
    })
    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)
    }
    //********************SCROLL2******************
        // $(".").click(function(){
        //     $(".mainBanner3").addClass("on")
        // })
    // ***************sub5 TABMENU****************
    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
    })


    



})




