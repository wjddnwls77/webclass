$(document).ready(function(){
    let cirlceLength = $(".c1").get(0).getTotalLength()
    console.log(cirlceLength)
    $(".btn").click(function(){

        if($(".skill").hasClass("on")==false){
            //skill클래스에 on클래스가 없다면
            $(".skill").addClass("on")
            $(".skill>li").each(function(){
     
     
               let list = $(this)
               let percent = $(this).find(".per").text()
               let count = 0
               let circle = $(this).find("circle")
     
               let timer = setInterval(function(){
                 count++
                 list.find(".per").text(count)
                 circle.css("stroke-dashoffset",314-(314*(count/100)))
                 if(count>=percent){
                     clearInterval(timer)
                 }
               },10)
            })
        }
       
    })

    // skill 구간에 걸쳤을 때 실행되는 부분.
    $(window).scroll(function(){
        let winScroll = $(window).scrollTop()
        let  win = $(".skill").offset().top 
        let winheight = $(window).height()*0.5
        if(winScroll+winheight>=win){
            if($(".skill").hasClass("on")==false){
                //skill클래스에 on클래스가 없다면
                $(".skill").addClass("on")
                $(".skill>li").each(function(){
                   let list = $(this)
                   let percent = $(this).find(".per").text()
                   let count = 0
                   let circle = $(this).find("circle")
                   let timer = setInterval(function(){
                     count++
                     list.find(".per").text(count)
                     circle.css("stroke-dashoffset",314-(314*(count/100)))
                     if(count>=percent){
                         clearInterval(timer)
                     }
                   },10)
                })
            }
        }
    })
   


})