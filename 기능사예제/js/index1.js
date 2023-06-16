$(document).ready(function(){

    // 슬라이드 카운트 설정
  let count =0;
  setInterval(function(){
    count++;
    $(".train").css("transform","translateX("+(-(100/3)*count)+"%)")
  },2500)


    // 탭메뉴
    $(".tebmenu>dt").click(function(){
        $(".tebmenu>dt").removeClass("on")
        $(this).addClass("on")

        $(".tebmenu>dd").removeClass("on")
        $(this).next().addClass("on")

      })
    // 팝업창
    $(".btnPopup").click(function(){
        $(".popUP").addClass("on")
    })

    $(".btnPopupClose").click(function(){
        $(".popUP").removeClass("on")
    })

})
