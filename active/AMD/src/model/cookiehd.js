
//业务逻辑模块;
define(["jquery","jqueryCookie"],function($){
    function CookieHandle(){
    }
    CookieHandle.prototype.handler = function(){
        // console.log(coo);
        // console.log($.cookie)
        if($.cookie("hander")){
            var hander = $.cookie("hander");
            hander ++;
            $.cookie("hander",hander)
        }

        return hander;
    }

    return new CookieHandle();
});