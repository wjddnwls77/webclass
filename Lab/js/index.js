$(document).ready(function(){

    // MENU

    $(".btnMenu").click(function(){

        if($(".gnb").hasClass("on")==false){
            $(".gnb").addClass("on")
        }else{
            $(".gnb").removeClass("on")
        }
    })
    
    $(".menu>li .depi").click(function(e){
        // e.preventDefault()
        let _this = $(this).parent().parent()
        if(_this.hasClass("on")==true){
            _this.css("height","50px")
            _this.removeClass("on")
        }else{
            $(".menu>li").css("height","50px")
            $(".menu>li").removeClass("on")
            let li2dep = _this.children("ul").children().length
            _this.css("height",(li2dep+1)*50+"px")
            _this.addClass("on")
        }
        return false;
        
    })
    
    $(".menu ul").click(function(){
        return false
    })

    // MAIN PAGE SLIDER_1
    
    let count = 0;
    //다음 버튼을 눌렀을 때
    $(".btnNext").click(function(e){
        count++;
        e.preventDefault()
        if(count>2){count = 0}
        slideMove(count)
        
    })
    $(".btnPrev").click(function(e){
        count--;
        e.preventDefault()
        if(count<0){count = 0}
        slideMove(count)
        
    })

    function slideMove(idx){
        $(".mainTrain").css("transform","translateX("+(-(100/3)*idx)+"%)")
    }
    


    
    //BEST SELLERS SLIDE

    // let bestCount = 0;
    // //다음 버튼을 눌렀을 때
    // $(".bestNext").click(function(e){
    //     bestCount++;
    //     e.preventDefault()
    //     if(bestCount>1){bestCount = 0}
    //     bestslide(bestCount)
        
    // })
    // $(".bestPrev").click(function(e){
    //     bestCount--;
    //     e.preventDefault()
    //     if(bestCount<0){bestCount = 0}
    //     bestslide(bestCount)
        
    // })

    // function bestslide(idx){
    //     $(".bestStation").css("transform","translateX("+(-100*idx)+"%)")
    // }

    //EVENT SLIDER 







})