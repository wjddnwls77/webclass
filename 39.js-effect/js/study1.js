$(document).ready(function(){
    //btnMenu클래스 버튼을 클릭했을 때 nav태그가 보이게 되도록 기능

    // let gnbState = false;


    $(".btnMenu").click(function(){

        //$(선택된태그).hasClass("on")
        //선택한 태그가 on이라는 클래스가 있다면 사용된 자리에 true를 리턴하고 
        //선택한 태그가 on이라는 클래스가 없다면 사용된 자리에 false를 리턴하는 함수

        if($("nav").hasClass("on")==false){
            //메뉴가 닫혀있는 상태 -> 메뉴를 여는 기능
            $("nav").addClass("on")
            
        } else{
            //메뉴가 열려있는 상태 -> 메뉴를 닫는 기능
            $("nav").removeClass("on")
        
        }
    
    })
    
    $(".gnb>li").click(function(){
        //리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다 / 없다 라는 기준이 필요!
        
        if($(this).hasClass("on")==true){
            // 여기서 this 클릭한 1뎁스 list 를 의미.
            // 맨처음 false가남겨지게됨 false=true기 때문에 else 구문으로 넘어감.
            $(this).css("height","50px")
            $(this).removeClass("on")
        }else{
            $(".gnb>li").css("height","50px")
            $(".gnb>li").removeClass("on")
            let li2dep = $(this).children("ul").children().length
            // 2뎁스의 list 들의 갯수를 구해서 저장됨.(원소로 저장된 배열객체 저장.)
            $(this).css("height",(li2dep+1)*50+
            "px")
            // 클릭한 1뎁스의 2뎁스 리스트들의 높이
            $(this).addClass("on")

        }

        // $(".gnb>li").css("height","50px")
        //여러개의 리스트 중 내가 클릭한 리스트 포함하고 있는 2뎁스 ul 태그의 자식 li 태그의 개수를 구해서 그 개수에 비례한 만큼의 값으로 클릭한 리스트의 높이를 지정.
        //about 클릭 -높이 150
        //profile 클릭 -높이 200
        // let li2deth = ($(this).children("ul").children().length)
        // $(this).css("height",(li2deth+1)*50+"px")
    });

    $(".gnb ul").click(function(){
        return false
    })







})