// alert("i am index.js");
//业务逻辑模块;
//功能的调用者,功能的支配者, 整个页面的核心;

// 模块定义;
// 进行编程  =>  实例化对象进行返回;
// define(function() {
//     'use strict';
    
//     return new Foo();

//     function Foo(){
//         this.title = "hello world";
//     }
// });
define(["model/pop","model/randomBg"],function(pop,rb){
    // console.log(pop);
    console.log(pop);
    pop.init("button");

    document.getElementsByTagName("button")[0].onclick = function(){
        rb.init("button")
    }
});