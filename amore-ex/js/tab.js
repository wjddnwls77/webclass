
    function tab(classname){
        let tab =document.querySelectorAll("."+classname+">dt")
        for(let i=0; i<tab.length ; i++){
            tab[i].addEventListener("click",function(){
                for(let k=0 ; k<tab.length ; k++){
                    tab[k].classList.remove("on")
                }
                this.classList.add("on")
            })
        }
    }
   











