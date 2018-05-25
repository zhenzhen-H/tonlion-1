// define(["jquery"],function(){
//     function nav_exposed(){
//         var flag=false;//div是否显示，显示为true  隐藏为false
//         $(".allList").mouseover(function(){
//             // flag=true;
//             $(".nav-exposed").css("display","block");
//         })
//         $(".allList").mouseout(function(){
//             setTimeout(function(){
//                 if(!flag){
//                     $(".nav-exposed").css("display","none");
//                 }
                
//             },500)    
//         })
//         $(".nav-exposed").mouseover(function(){
//             flag=true;
//             $(".nav-exposed").css("display","block");
//         })
//         $(".nav-exposed").mouseout(function(){
//             flag=false;
//             $(".nav-exposed").css("display","none");
//         })
    
//     }
//     return   nav_exposed();
// })


;+function(factory){
    //AMD判断;
    if(typeof define === "function" && define.amd){
       define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
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
    $.nav_exposed=nav_exposed;
    return nav_exposed;
})