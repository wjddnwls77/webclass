$(document).ready(function(){
    
    /* .floatingTxt>h1 b:nth-of-type(1){animation: introAni 1s ease 0s forwards;}
.floatingTxt>h1 b:nth-of-type(2){animation: introAni 1s ease 0.25s forwards;}
.floatingTxt>h1 b:nth-of-type(3){animation: introAni 1s ease 0.5s forwards;}
.floatingTxt>h1 b:nth-of-type(4){animation: introAni 1s ease 0.75s forwards;}
.floatingTxt>h1 b:nth-of-type(5){animation: introAni 1s ease 1s forwards;}
.floatingTxt>h1 b:nth-of-type(6){animation: introAni 1s ease 1.25s forwards;}
.floatingTxt>h1 b:nth-of-type(7){animation: introAni 1s ease 1.5s forwards;}
.floatingTxt>h1 b:nth-of-type(8){animation: introAni 1s ease 1.75s forwards;}
.floatingTxt>h1 b:nth-of-type(9){animation: introAni 1s ease 2s forwards;}
.floatingTxt>h1 b:nth-of-type(10){animation: introAni 1s ease 2.25s forwards;}
.floatingTxt>h1 b:nth-of-type(11){animation: introAni 1s ease 2.5s forwards;}
.floatingTxt>h1 b:nth-of-type(12){animation: introAni 1s ease 2.75s forwards;}
.floatingTxt>h1 b:nth-of-type(13){animation: introAni 1s ease 3s forwards;}
.floatingTxt>h1 b:nth-of-type(14){animation: introAni 1s ease 3.25s forwards;} */

//     let animationTerm = 0.1
//     let animationDuration = 5
//     // console.log($(".floatingTxt h1 b").length) //선택한 태그들은 배열형태로 리턴된다 그래서 배열의 원소의 개수를 .legnth를 통해 구해볼 수 있다.
//    $(".floatingTxt h1 b").length

//     // let a = [1,2,3]
//     // a.length

//     for(let  i = 0; i< $(".floatingTxt h1 b").length ; i++){
//         $(".floatingTxt h1 b:nth-of-type("+(i+1)+")").css("animation","introAni "+animationDuration+"s ease "+(animationTerm*i)+"s forwards")
//     }


// function textAni(cssSelector,option){
//     let animationTerm = option.aniDelay
//     let animationDuration = option.aniSpeed
//     $(cssSelector).css("font-size","0")
//     $(cssSelector+" b").css("opcity","0").css("line-height","1").css("diplay","inline-block").css("font-size",option.textSize+"px")


//     for(let  i = 0; i< $(cssSelector+" b").length ; i++){
//         $(cssSelector+" b:nth-of-type("+(i+1)+")").css("animation","introAni "+animationDuration+"s ease "+(animationTerm*i)+"s forwards")
//     }

// }

    textAni(".floatingTxt",{
        aniDelay:0.2,
        aniSpeed:1,
        textSize:50

    })
    textAni(".txtbox",{
        aniDelay:1,
        aniSpeed:0.5,
        textSize:100

    })

    // new Swiper(".swiper"),{
    //     slidesPerView:3
    // }

})