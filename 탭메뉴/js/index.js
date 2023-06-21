$(document).ready(function(){

    $(".tebmenu>dt").click(function(){
        $(".tebmenu>dt").removeClass("on")
        $(this).addClass("on")

        $(".tebmenu>dd").removeClass("on")
        $(this).next().addClass("on")
    })
    

})