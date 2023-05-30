window.onload = function(){

    let nextBtn = document.querySelector(".btnNext")
    let prevBtn = document.querySelector(".btnPrev")
    let train =document.querySelector(".train")
    let trainList = train.children 
    let pageList =document.querySelectorAll(".pagination>li")
    // let pagiNation =document.querySelector(".pagination")
    // let pageList = pagiNation.children
    let count = 0
  
    //count -전역변수 

    nextBtn.addEventListener("click",function(){
        //train클래스를 선택해서 왼쪽으로 500픽셀 이동
        count++
        if(count>3){count=0}
        train.style.transform="translateX(-"+25*count+"%)"

        for(let i=0 ; i<trainList.length; i++){
        trainList[i].classList.remove("on")
        pageList[i].classList.remove("on") 
        }
        trainList[count].classList.add("on")
        pageList[count].classList.add("on")
       
    }) 
    
    prevBtn.addEventListener("click",function(){
        count--
        if(count<0){count=3}
        train.style.transform =`translateX(-${25*count})`
        for(let i=0 ; i<trainList.length; i++){
        trainList[i].classList.remove("on")
        pageList[i].classList.remove("on")   
        }
        trainList[count].classList.add("on")
        pageList[count].classList.add("on")
           
    })

    for(let a=0 ; a<4 ; a++){
        pageList[a].addEventListener("click",function(){
            count = a //순번에 맞는 인덱스를 카운트 변수에 저장한다.
            for(let i=0 ; i<trainList.length; i++){
                trainList[i].classList.remove("on")
                pageList[i].classList.remove("on")   
            }
            trainList[a].classList.add("on")
            pageList[a].classList.add("on")

            train.style.transform =`translateX(-${25*a})`
            
        })
    }




}