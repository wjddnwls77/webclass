window.onload = function(){
    let dtList = document.querySelectorAll(".tabMenu>dt")

    for(let i=0 ; i<dtList.length; i++){
        dtList[i].addEventListener("click",function(){
            for(let i=0 ; i<dtList.length; i++)
            // dtList[0].classList.remove("on")
            // dtList[1].classList.remove("on")
            // dtList[2].classList.remove("on")
            for(let j=0 ; j<dtList.length;j++){
                dtList[j].classList.remove("on")
            }
            this.classList.add("on")
            //this.nextElementSibling.classList.add("on")
            //this - 클릭하는 맥락안에서 클릭한 태그를 this로 표현 할 수 있다.
        }) 
    }
}