// define(["jquery"],function(){
//       //登录注册的图片转换
//       function login_register(){
        
//         var ologin=$(".h-top1-a1");
//         var oregister=$(".h-top1-a2");
//         var overlay=$("#overlay");
//         var oEasyDialog=$("#easyDialog");
//         var tab_login=$(".tab_login");
//         var tab_register=$(".tab_register");
//         this.ologin=ologin;
//         this.oregister=oregister;
//         this.overlay=overlay;
//         this.oEasyDialog=oEasyDialog;
//         this.tab_login=tab_login;
//         this.tab_register=tab_register;
//         // console.log(tab_register);
//         this.init();
//     }
//     login_register.prototype={
//         constructor:login_register,
//         init(){    
//             // console.log(this.oregister);
//             // alert(1);
//             this.ologin.click(function(){
//                 // alert(1);
//                 this.pop_login();
//             }.bind(this));
//             this.oregister.click(function(){
//                 this.pop_register();
//             }.bind(this));
            
//         },
//         pop_login(){
//             // alert(1);
//             //标题头加黑
//             this.nav0=$(".nav0");
//             this.nav0.addClass("selected0");

//             this.overlay.css({"display":"block"});
//             this.oEasyDialog.css({"display":"block"});
//             this.tab_login.css({"display":"block"});
//             this.tab_register.css({"display":"none"});
//             // console.log(this.tab_register);
//             //切换到注册

//             this.nav1=$(".nav1");
//             this.nav1.click(function(){
//                  //标题头变化
//                 this.nav0.removeClass("selected0");
//                 this.nav1=$(".nav1");
//                 this.nav1.addClass("selected1");

                
//                 this.tab_register.css({"display":"block"});
//                 this.tab_login.css({"display":"none"});
//             }.bind(this));
//             //再次切换到登录
//             this.nav0=$(".nav0");
//             this.nav0.click(function(){
//                 this.nav1.removeClass("selected1");
//                 this.nav0=$(".nav0");
//                 this.nav0.addClass("selected0");

//                 this.tab_login.css({"display":"block"});
//                 this.tab_register.css({"display":"none"});
//             }.bind(this));
//             //关闭弹框
//             this.gb=$(".gb");
//             this.gb.click(function(){
//                 this.disapper();
//             })
            
//         },
//         pop_register(){
//             // alert(1);
//             //标题头加黑
//             this.nav1=$(".nav1");
//             this.nav1.addClass("selected1");

//             this.overlay.css({"display":"block"});
//             this.oEasyDialog.css({"display":"block"});
//             this.tab_register.css({"display":"block"});
//             this.tab_login.css({"display":"none"});
//             //切换到登录
//             this.nav0=$(".nav0");
//             this.nav0.click(function(){
//                 //切换标题头
//                 this.nav1.removeClass("selected1");
//                 this.nav0=$(".nav0");
//                 this.nav0.addClass("selected0");

//                 this.tab_login.css({"display":"block"});
//                 this.tab_register.css({"display":"none"});
//             }.bind(this));
//             //再次切换到注册
//             this.nav1=$(".nav1");
//             this.nav1.click(function(){
//                 //切换标题头
//                 this.nav0.removeClass("selected0");
//                 this.nav1=$(".nav1");
//                 this.nav1.addClass("selected1");
//                 //css变化
//                 this.tab_register.css({"display":"block"});
//                 this.tab_login.css({"display":"none"});
//             }.bind(this));
//             //关闭
//             this.gb=$(".gb");
//             this.gb.click(function(){
//                 this.disapper();
//             })
            
//         },
//         disapper(){
//             this.overlay.css({"display":"none"});
//             this.oEasyDialog.css({"display":"none"});
//         }
//     }
//     // new login_register();
// })


;+function(factory){
    //AMD判断;
    if(typeof define === "function" && define.amd){
       define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
      //登录注册的图片转换
    function login_register(){
        
        var ologin=$(".h-top1-a1");
        var oregister=$(".h-top1-a2");
        var overlay=$("#overlay");
        var oEasyDialog=$("#easyDialog");
        var tab_login=$(".tab_login");
        var tab_register=$(".tab_register");
        this.ologin=ologin;
        this.oregister=oregister;
        this.overlay=overlay;
        this.oEasyDialog=oEasyDialog;
        this.tab_login=tab_login;
        this.tab_register=tab_register;
        // console.log(tab_register);
        this.init();
    }
    login_register.prototype={
        constructor:login_register,
        init(){    
            // console.log(this.oregister);
            // alert(1);
            this.ologin.click(function(){
                // alert(1);
                this.pop_login();
            }.bind(this));
            this.oregister.click(function(){
                this.pop_register();
            }.bind(this));
            
        },
        pop_login(){
            // alert(1);
            //标题头加黑
            this.nav0=$(".nav0");
            this.nav0.addClass("selected0");

            this.overlay.css({"display":"block"});
            this.oEasyDialog.css({"display":"block"});
            this.tab_login.css({"display":"block"});
            this.tab_register.css({"display":"none"});
            // console.log(this.tab_register);
            //切换到注册

            this.nav1=$(".nav1");
            this.nav1.click(function(){
                 //标题头变化
                this.nav0.removeClass("selected0");
                this.nav1=$(".nav1");
                this.nav1.addClass("selected1");

                
                this.tab_register.css({"display":"block"});
                this.tab_login.css({"display":"none"});
            }.bind(this));
            //再次切换到登录
            this.nav0=$(".nav0");
            this.nav0.click(function(){
                this.nav1.removeClass("selected1");
                this.nav0=$(".nav0");
                this.nav0.addClass("selected0");

                this.tab_login.css({"display":"block"});
                this.tab_register.css({"display":"none"});
            }.bind(this));
            //关闭弹框
            this.gb=$(".gb");
            this.gb.click(function(){
                this.disapper();
            })
            
        },
        pop_register(){
            // alert(1);
            //标题头加黑
            this.nav1=$(".nav1");
            this.nav1.addClass("selected1");

            this.overlay.css({"display":"block"});
            this.oEasyDialog.css({"display":"block"});
            this.tab_register.css({"display":"block"});
            this.tab_login.css({"display":"none"});
            //切换到登录
            this.nav0=$(".nav0");
            this.nav0.click(function(){
                //切换标题头
                this.nav1.removeClass("selected1");
                this.nav0=$(".nav0");
                this.nav0.addClass("selected0");

                this.tab_login.css({"display":"block"});
                this.tab_register.css({"display":"none"});
            }.bind(this));
            //再次切换到注册
            this.nav1=$(".nav1");
            this.nav1.click(function(){
                //切换标题头
                this.nav0.removeClass("selected0");
                this.nav1=$(".nav1");
                this.nav1.addClass("selected1");
                //css变化
                this.tab_register.css({"display":"block"});
                this.tab_login.css({"display":"none"});
            }.bind(this));
            //关闭
            this.gb=$(".gb");
            this.gb.click(function(){
                this.disapper();
            })
            
        },
        disapper(){
            this.overlay.css({"display":"none"});
            this.oEasyDialog.css({"display":"none"});
        }
    }
    $.login_register=login_register;
    return login_register;
})