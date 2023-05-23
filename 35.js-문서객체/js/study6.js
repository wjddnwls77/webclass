window.onload = function(){
    //한 번만 실행.
    let menuState = false
    //문서가 끝까지 읽은 뒤 실행할 소스코드
    let btnMenu = document.querySelector(".btnMenu")
    let navTag = document.querySelector("nav")

    //"클릭"할때마다 실행
    btnMenu.addEventListener("click",function(){
        //메뉴가 닫혀있는 경우 실행되는 코드
        if(menuState ==  false){
            btnMenu.classList.add("close")
            navTag.classList.add("show")
            menuState = true
        }else{
            //메뉴가 열려있는 경우 실행되는 코드
            btnMenu.classList.remove("close")
            navTag.classList.remove("show")
            menuState =  false
        }
    })













}
