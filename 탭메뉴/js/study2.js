$(document).ready(function(){

    let count =0;
   
    $(".btnNext").click(function(){
        count++;
        if(count>3){count=0}
        $(".train").css("transform","translateX(-"+count*25+"%)")
    })
    
    $(".btnPrev").click(function(){
        count--;
        if(count<0){count=3}
        $(".train").css("transform","translateX(-"+count*25+"%)")
    })
   




})