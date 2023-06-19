

    function textAni(cssSelector,option){
        //option 정보
        // aniDelay -> 글자들이 나타나는 간격
        // aniSpedd -> 글자들이 나타나는 속도
        //textSize -> 글자드에게 적용하는 크기



        let animationTerm = option.aniDelay?option.aniDelay:0.5
        let animationDuration = option.aniSpeed?option.aniSpeed:1
        let aniTxtSize = option.textSize?option.textSize:20


        $(cssSelector).css("font-size","0")
        $(cssSelector+" b").css("opacity","0").css("line-height","1").css("display","inline-block").css("font-size",aniTxtSize+"px")


        for(let  i = 0; i< $(cssSelector+" b").length ; i++){
            $(cssSelector+" b:nth-of-type("+(i+1)+")").css("animation","introAni "+animationDuration+"s ease "+(animationTerm*i)+"s forwards")
        }

    }

    // let a = 9
    // a>9?1:2



