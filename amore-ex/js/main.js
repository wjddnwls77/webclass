window.onload = function(){
    let bannerDT = document.querySelectorAll(".bannerTabMenu>dt")

    for(let i=0 ; i<bannerDT.length; i++){
        bannerDT[i].addEventListener("click",function(){
            for(let j=0 ; j<bannerDT.length;j++){
                bannerDT[j].classList.remove("on")
            }
            this.classList.add("on")
        })
    }

    let tabDT =document.querySelectorAll(".tabMenu>dt")
   
    for(let i =0; i< tabDT.length; i++){
        tabDT[i].addEventListener("click",function(){
            for(let k=0 ; k<tabDT.length;k++){
                tabDT[k].classList.remove("on")
            }
            this.classList.add("on")
        })
    }
    tab("tabMenu")
    tab("bannerTabMenu")

}