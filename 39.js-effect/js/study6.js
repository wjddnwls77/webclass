$(document).ready(function(){
    

    let count = 0
    $(".btnNext").click(function(e){
       e.preventDefault()//클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
       count++;
       if(count>4){
        count=0;
       }
       $(".train").css("transform","translateY("+(count*-20)+"%)")
    })
    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--;
        if(count<0){
            count=4;
            // 가장마지막슬라이드로 이동 0대신 4
        }
        $(".train").css("transform","translateY("+(count*-20)+"%)")
    })

    let timer =setInterval(function(){
        count++;
       if(count>4){
        count=0;
       }
       $(".train").css("transform","translateY("+(count*-20)+"%)")

    },2500)
   $(".station").mouseover(function(){
        clearInterval(timer)
   })
   $(".station").mouseout(function(){
        timer =setInterval(function(){
        count++;
       if(count>4){
        count=0;
       }
       $(".train").css("transform","translateY("+(count*-20)+"%)")

    },2500)

   })
  
})