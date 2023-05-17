function getBMI(uHeight,uWeight){
    let result;
    result = uWeight / Math.pow(uHeight/100,2)
    return result
}

function getBMI_result(bmiNum){
    let result;
    if(bmiNum>=25){
        result = "비만"
    }else if(bmiNum>=23 && bmiNum<=24.9 ){
        result ="과체중"
    }else if(bmiNum>=18.5 && bmiNum<=22.9){
        result = "정상"
    }else{
        result ="저체중"
    }
    return result
}

function showResult(uName,uHeight,uWeight,uBmi,uBmiResult){

    document.write(`<table class="gradeStyle">
    <caption>${uName}님의 비만도 검사결과</caption>
    <tr>
        <th>신장</th>
        <td>${uHeight}cm</td>
    </tr>
    <tr>
        <th>몸무게</th>
        <td>${uWeight}kg</td>
    </tr>
    <tr>
        <th>bmi</th>
        <td>${uBmi}점</td>
    </tr>
    <tr>
        <th>결과</th>
        <td>${uBmiResult}</td>
    </tr>
</table>`
)
}