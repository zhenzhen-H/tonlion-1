$(function(){
     //全部分类悬浮出现一个div
    //面向对象的nav-exposed  div
    function nav_exposed(){
        var flag=false;//div是否显示，显示为true  隐藏为false
        $(".allList").mouseover(function(){
            // flag=true;
            $(".nav-exposed").css("display","block");
        })
        $(".allList").mouseout(function(){
            setTimeout(function(){
                if(!flag){
                    $(".nav-exposed").css("display","none");
                }
                
            },500)    
        })
        $(".nav-exposed").mouseover(function(){
            flag=true;
            $(".nav-exposed").css("display","block");
        })
        $(".nav-exposed").mouseout(function(){
            flag=false;
            $(".nav-exposed").css("display","none");
        })
    
    }
    new nav_exposed();

})