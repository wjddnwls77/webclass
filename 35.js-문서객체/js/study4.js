window.onload = function(){
    let title = document.querySelector("#title")
    title.style.color = "blue"

    let titleParent = title.parentElement
    titleParent.style.border = "1px solid blue"

    leg = document.querySelector(".list")
    let list = ulTag.children

    // list[0].style.borderBottom = "1px solid black"
    // list[1].style.borderBottom = "1px solid black"
    // list[2].style.borderBottom = "1px solid black"
    // list[3].style.borderBottom = "1px solid black"
    for(let i=0 ;  i<list.length ; i++)
    {
        list[i].style.borderBottom = "1px solid black"
    }

    title.nextElementSibling.style.background = "lightblue"
    list[0].nextElementSibling.nextElementSibling.style.color ="red"
    ulTag.previousElementSibling.style.textDecoration = "underline"
}
