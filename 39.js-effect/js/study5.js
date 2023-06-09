$(document).ready(function(){


    let count = 0;//body태그를 다 읽고 최초 한번실행
    $(".btnNext").click(function(e){
        count++
        e.preventDefault()
        if(count>4){count=0}//예외처리
        //기차가 왼쪽으로 500픽셀 
        moveSlide(count)
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--
        if(count<0){count=0} //예외처리
        moveSlide(count)
    })

    function moveSlide(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }
    // moveSlide(3)

})