$(document).ready(function(){

    //*********************SUB1 SLIDER*********************** 
    let subOneCount = 0;
    let perViewsubOne;
    let subStationWidth;
    let subTrainWidth;
    let winWidth =$(window).width();

    if(winWidth>=1024){
        perViewsubOne = 2;
        subStationWidth = $(".proStation").width()
        subTrainWidth = subStationWidth * 4 /perViewsubOne
        $(".proTrain").width(subTrainWidth)
    }else{
        perViewsubOne = 1;
        subStationWidth = $(".proStation").width()
        subTrainWidth = subStationWidth * 4 /perViewsubOne
        $(".proTrain").width(subTrainWidth)
    }

    $(window).resize(function(){
        let winWidth =$(window).width();
        if(winWidth>=1024){
            perViewsubOne = 2;
            subStationWidth = $(".proStation").width()
            subTrainWidth = subStationWidth * 4 /perViewsubOne
            $(".proTrain").width(subTrainWidth)
        }else{
            perViewsubOne = 1;
            subStationWidth = $(".proStation").width()
            subTrainWidth = subStationWidth * 4 /perViewsubOne
            $(".proTrain").width(subTrainWidth)
        }

    })
   //다음 버튼을 눌렀을 때
    $(".subOneNext").click(function(e){
        subOneCount++;
        e.preventDefault()
        if(subOneCount>2){subOneCount = 0}
        subOneslider(subOneCount)
       
      
    })
    $(".subOnePrev").click(function(e){
        subOneCount--;
        e.preventDefault()
        if(subOneCount>2){subOneCount = 0}
        subOneslider(subOneCount)
        
    })
    let timer = setInterval(function(){
        subOneCount++;
        if(subOneCount>4){subOneCount = 0}
        subOneslider(subOneCount)
    },2000)


    function subOneslider(idx){
        $(".proTrain").css("transform","translateX("+(-(100/4)*idx)+"%)")

    }

})