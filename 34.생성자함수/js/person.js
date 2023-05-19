function Person(userName,userAge){
    this.name = userName
    this .age = userAge
    this.sayHello = function(){
        document.write("<p>안녕하세요"+this.name+"</p>")
    }
    this.inro = function(){
        document.write(`<p>${this.name}님은 ${this.age}살 입니다.</p>`)
    }
}