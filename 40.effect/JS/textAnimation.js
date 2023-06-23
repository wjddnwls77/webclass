

    // function textAni(cssSelector,option){
    //     //option 정보
    //     // aniDelay -> 글자들이 나타나는 간격
    //     // aniSpedd -> 글자들이 나타나는 속도
    //     //textSize -> 글자드에게 적용하는 크기
    //     //aniName -> 적용할 에니메이션 이름
    //     let lettersLength= $(cssSelector).get(0).innerText.length
    //     let result = ""
    //     for(let i =0 ; i<lettersLength; i ++){
    //         result+="<b>"+$(cssSelector).get(0).innerText[i]+"</b>"
    //     }
    //     $(cssSelector).html(result)
    //     // 제이쿼리문서객체.get(0) => 실행하게되면 제이쿼리 문서객체를 자바스크립트 문서객체로 변환하여 리턴한다.
    //     //문자데이터들은  배열처럼 구성이 되어있다.
    //     let animationTerm = option.aniDelay?option.aniDelay:0.5
    //     let animationDuration = option.aniSpeed?option.aniSpeed:1
    //     let aniTxtSize = option.textSize?option.textSize:20
    //     let aniName = option.effect?option.effect:"introAni"


    //     $(cssSelector).css("font-size","0")
    //     $(cssSelector+" b").css("opacity","0").css("line-height","1").css("display","inline-block").css("font-size",aniTxtSize+"px")


    //     for(let  i = 0; i< $(cssSelector+" b").length ; i++){
    //         $(cssSelector+" b:nth-of-type("+(i+1)+")").css("animation",aniName+" "+animationDuration+"s ease "+(animationTerm*i)+"s forwards")
    //     }

    // }


    function textAni(cssSelector,option){
        // option
        // aniDelay 글자들이 나타나는 간격
        // aniSpeed 글자들이 나타나는 속도
        // textSize 글자들에게 적용하는 크기
        let lettersLength = $(cssSelector).get(0).innerText.length
        let result =""
        for(let i=0 ; i<lettersLength ; i++){
            result+="<b>"+$(cssSelector).get(0).innerText[i]+"</b>"
        }
        $(cssSelector).html(result)
        // 제이쿼리문서객체.get(0) => 실행하게되면 제이쿼리문서객체를 자바스크립트문서객체로 변환하여 리턴한다.
        // 문자데이터들은 배열처럼 구성이 되어있다.
    
        let aniamtionTerm = option.aniDelay?option.aniDelay:0.5
        let animationDuration = option.aniSpeed?option.aniSpeed:1
        let aniTxtSize = option.textSize?option.textSize:20
        let aniName = option.effect?option.effect:"introAni"
    
        // $(cssSelector).css("font-size","0")
        $(cssSelector+" b").css("opacity","0").css("line-height","1").css("display","inline-block").css("font-size",aniTxtSize+"px")
    
        for(let i=0 ; i<$(cssSelector+" b").length ; i++){
            $(cssSelector+" b:nth-of-type("+(i+1)+")").css("animation",aniName+" "+animationDuration+"s ease "+(aniamtionTerm*i)+"s forwards")
        }   
    }

    // let a = 9
    // a>9?1:2



