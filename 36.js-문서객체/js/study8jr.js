let tabDescription = [
    `<h3>title1</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, fuga sunt. Dolore fugit perspiciatis repudiandae corrupti animi omnis, ad cumque recusandae deserunt, officiis iste tenetur impedit corporis placeat nemo temporibus.</p>`,
   `<h3>title2</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, fuga sunt. Dolore fugit perspiciatis repudiandae corrupti animi omnis, ad cumque recusandae deserunt, officiis iste tenetur impedit corporis placeat nemo temporibus.</p>`,
    `<h3>title3</h3>
    <ul>
        <li>des1</li>
        <li>des2</li>
        <li>des3</li>
        <li>des4</li>
    </ul>`
]

$(document).ready(function(){
    $(".tabTit>li").click(function(){
        $(".tabTit>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()//index()함수는 앞에 선택된 태그의 부모태그 기준 순번을 리턴함
        $(".tabDes").html(tabDescription[idx])
    })

})