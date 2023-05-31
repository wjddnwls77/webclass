window.onload = function(){

    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription = [
        `<h3>title1</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nam magnam, eius et numquam omnis ad accusantium reiciendis quae. Libero assumenda labore quos autem perspiciatis magnam magni incidunt, rerum repellat!</p>`,
    `<h3>title1</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nam magnam, eius et numquam omnis ad accusantium reiciendis quae. Libero assumenda labore quos autem perspiciatis magnam magni incidunt, rerum repellat!</p>`,
    `<h3>title1</h3>
    <ul>
        <li>des1</li>
        <li>des2</li>
        <li>des3</li>
        <li>des4</li>
    </ul>`

    ]


    for(let i=0 ; i<tabTitles.length ; i++){
        tabTitles[i].addEventListener("click",function(e){
                   
                for(let j=0 ; j<tabTitles.length;j++){
                    tabTitles[j].classList.remove("on")
                }
                this.classList.add("on")
                tabDes.innerHTML = tabDescription[i]
        })
    }











}