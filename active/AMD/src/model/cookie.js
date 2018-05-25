//业务逻辑模块;
define(["jquery","cookie"],function(jq,cookie){
    //1.复用性;
    console.log(cookie)
    $("button").on("click",cookie.handler)
});
// (function(factory){
//     if(typeof define === "function" && define.amd){
//         define(["jquery"],factory)
//     }else if (typeof exports == "object"){
//         module.exports = function(){
//             var jQuery = require("jQuery");
//             return factory(jQuery);
//         }
//     }else {
//         factory(jQuery);
//     }
// })(function foo($){

// })

