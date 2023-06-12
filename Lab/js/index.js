$(document).ready(function(){

    // MENU
    $(".skinSolution>*").addClass("mTtBaleady")

    $(".btnMenu,.btnMoMenu").click(function(){

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
    

    //MAIN PAGE SCROLL
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.7
        $(".mTtB,.mTtBaleady,.mLtR,.mBtT").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })
    
    //BEST SELLERS SLIDE

    let bestCount = 0;
    //다음 버튼을 눌렀을 때
    $(".bestNext").click(function(e){
        bestCount++;
        e.preventDefault()
        if(bestCount>1){bestCount = 0}
        bestslide(bestCount)
      
    })
    $(".bestPrev").click(function(e){
        bestCount--;
        e.preventDefault()
        if(bestCount<0){bestCount = 0}
        bestslide(bestCount)
        
    })
    function bestslide(idx){
        $(".bestStation").css("transform","translateX("+(-100*idx)+"%)")
    }

    //EVENT SLIDER 
    let eventSliderBanner = new Swiper(".eventSliderBanner",{

        breakpoints:{
            280:{
                slidesPerView :1,
            },
            768:{
                slidesPerView :1,
            
            }
        },
        pagination: {
            el: ".bannerLine",
        },
        autoplay:{
            delay:2800,
        }
    
    
    })
    console.log()
    let mi_count = 0;
    $(".mi_next").click(function(){
        mi_count--
        $(".aboutTrain>li").each(function(){
            let idx = $(this).index()
            console.log("리스트의 순번"+idx)
            console.log("더해지는 증가값"+mi_count)
            let classIdx = ((idx+mi_count) % 3)<0?((idx+mi_count) % 3)+3:((idx+mi_count) % 3)
            console.log("추가되는 클래스순번:"+classIdx)
            $(this).removeClass()
            $(this).addClass("sideImg"+classIdx)
        })
    })

    $(".mi_prev").click(function(){
        mi_count++
        $(".aboutTrain>li").each(function(){
            let idx = $(this).index()
            let classIdx = ((idx+mi_count) % 3)
            $(this).removeClass()
            $(this).addClass("sideImg"+classIdx)
        })
    })



    // $(".mi_prev").click(function(){
    //     mi_count++

        
    // })

    // $(".aboutTrain>li").click(function(){
    //     // alert("TEST")
    //     mi_count++
    //     prevAboutTrain(mi_count)
    // })

    // function prevAboutTrain(count){
    //     $(".aboutTrain>li").each(function(){
    //         let idx = $(this).index()
    //         let classIdx = ((idx+count) % 3)
    //         $(this).removeClass()
    //         $(this).addClass("sideImg"+classIdx)
    //     })
    // }



})