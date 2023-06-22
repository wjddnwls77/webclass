$(document).ready(function(){

    let result = ""
    // for(let i = 1; i<=20 ; i ++){
    //     result+= `<li>
    //         <img src="./img/img (8)/s${i}.jpg" alt="작은이미지${i}" class="small">
    //         <img src="./img/img (8)/pic${i}.jpg" alt="큰이미지${i}" class="big">
    //         <h2 class="title">art work ${i}</h2>
    //         <p>Artwork description comes here.<br>2023.06.20</p>
    //         <span class="btnClose">close</span>
    //     </li>`
    //     }
    for(let i=0; i<20 ; i++){
        result+=`<li>
                <img src="./img/img (8)/${artwork[i].imgFileName}" alt="${artwork[i].title}" class="small">
                <h2 class="title">${artwork[i].title}</h2>
                <p>${artwork[i].description}</p>
                <span class="btnClose">close</span>
            </li>`
    }
    // let a = 4
    // a=a+2 a+=2
    // b=b-2 b-=2 
    
    //`` 을 표기하는이유 = <li>안에 ""가 있기 때문에 , + 하기로 작업 해야하기 때문에. "" '' 무조건 한줄로 문자데이터를 표현해야 하기때문에. `` 은 엔터를 친다하더라도 ; 를 써서 암묵적으로 명령이 끝나다라는 명령을 실행하지 않음. 
    $(".train").html(result)
    // $(".train").text(result)//제이쿼리함수
    // html 새로운 내용으로 교체해주는 함수 


    $(".stationMenu>li").click(function(){
        let idx = $(this).index() // 클릭한 리스트의 순번을 리턴함.
        count = idx*5 //정해진 순번에 5를 곱한 값을 전역변수 count 에 저장함으로서 휠을 내렸을 때 이동되는 기능이 정상적으로 작동되게끔 해두는 코드
        // alert(count)
        //01 -> 0px
        //06 -> -1000px
        //11 -> -2000px
        //16 -> -3000px
        $(".train").css("transform","translateX("+(-1000*idx)+"px)")

    })
    let count = 0; //변수를 어디에 만드느냐가 중요하다 .
    $(".station").on("wheel DOMMouseScroll",function(event){
        // console.log(event) 호환성을 위한것이라 수정할 일이 없다.
        // let count = 0; =>여기에 실행하면 계속 카운트가0으로됨. 
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40
        }else{
            delta = E.wheelDelta
        }
       
        if(delta<0){
            //마우스 휠을 내렸을 때
            count ++;
            if(count>15){count = 15}
            console.log(count)
            $(".train").css("transform","translateX("+(-200*count)+"px)")
        }
        else{
            //마우스 휠을 올렸을 때
            count --;
            if(count<0){count = 0}
            $(".train").css("transform","translateX("+(-200*count)+"px)")

        } 
        return false
    })

    
    //클릭한 리스트(기차칸)의 활성화 스타일 기능
    $(".train>li").click(function(){
        $(".train>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()
        count = idx 
        $(".train").css("transform","translateX("+(-200*idx)+"px)")
    })

    //닫는버튼 기능
    $(".btnClose").click(function(){
        $(".train>li").removeClass("on")
        return false//상위태그로".train>li" 클릭이벤트가 전달되지 않게(버블링되지 않게)설정
    })
        

})
  // for(let i=1; i<=20; i++){
    //     $(`.train`).append(`
    //     <li>
    //     <img class="small" src="./img (4)/s${i}.jpg" alt="작은이미지${i}">
    //     <img class="big"src="./img (4)/pic${i}.jpg" alt="큰이미지${i}">
    //     <h2 class="title">art work ${i}</h2>
    //     <p>Artwork description comes here.<br>2023.06.20</p>
    //     <span class="btnClose">Close</span>
    //     </li>
    //     `)
    // }