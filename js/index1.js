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

    //当鼠标悬浮在图片上  图片运动
    function img_move(selector){
        // console.log(1);
        var oImg=$(selector);
        this.ele=oImg;
        // console.log(this.ele);
        // $(this.ele).mouseover(function(){
        //     // console.log(this);
        //     this.to_move();
        // }.bind(this));
        this.to_move();
    }
    img_move.prototype.to_move=function(){
        // console.log("我要move了。。。");
        // console.log(this.ele);
        var speed=2;
        var timer=null;
        $(this.ele).mouseover(function(){
            // console.log(this.ele);
            // console.log(this.ele.offset().top);
            clearInterval(timer);
            timer=setInterval(function(){
                // console.log(this.ele);
                if(this.ele.offset().top>=721){
                    clearInterval(timer);
                    this.ele.style.top=721+"px";
                }else{
                    // this.ele.css({"top":"this.ele.offset().top+speed+'px'});
                    // this.ele.style.top=this.ele.offset().top+speed+"px";
                }
            }.bind(this),20);
        }.bind(this));
        $(this.ele).mouseout(function(){
            // console.log(2);
        });
        
        
    }
    // new img_move(".item2-man");
    // new img_move(".item2-woman");
    


    function getList(url,main_selector){
        
        if(!url||!main_selector) return 0;
        this.url=url;
        this.main_selector=$(main_selector);
        this.init();
    }
    getList.prototype={
        constructor:getList,
        init(){
            // alert(1);
            this.page=1;
            this.load_data()
            .then(function(res){
                // console.log(res.list);
                this.json=res.list;
                this.render_page();
            }.bind(this))
            .fail(function(def,type,err_msg){
                console.log(err_msg);
                // console.log("加载数据失败...");
            })
        },
        load_data(){
            // alert(1);
            this.opt={
                url:this.url,
                dataType:"json",
                data:{page:this.page},
                statusCode:{
                    404:function(){
                        alert("page not found...");
                    },
                    403:function(){
                        alert("不让访问...");
                    }
                }
            };
            return $.ajax(this.opt);
        },
        render_page(){
            this.html="";
            this.json.forEach(function(item) {
                this.html+=` <div class="pure-1">
                                <div class="pure-2">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src=${item.img_url}> 
                                            </a>
                                            <h1>${item.desc}</h1>
                                            <h2>${item.nowPrice}</h2>
                                            <h3>${item.oldPrice}</h3>
                                        </li> 
                                    </ul>
                                </div>  
                
                            </div>`;
                
            }.bind(this));
           
            // alert(this.html);
            // alert(this.main_selector);
            this.main_selector.html(this.main_selector.html()+this.html);
     
        }
        
    }
    new getList("http://localhost/tonlion-1/lib/list1.json",".pane");


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
    new login_register();


    //注册
    $(".btn-register").on("click",function(){
        var username=$(".text_name_reg").val();
        var password=$(".text_pwd_reg").val();
        // console.log(username,password);
        var opt = {
            url:"http://localhost/tonlion-1/php/user.php",
            type:"POST",
            data:{username:username,password:password,type:"register"}
        }
        $.ajax(opt)
        .then(function(res){
        console.log(res);
            if(res == "1"){
                alert("注册成功！即将为您跳转到首页");
                location.href="index.html";
                
            }else{
                alert("用户名重名，注册失败！");
                
            }
        })
    })
    //登录
    $(".btn-login").on("click",function(){
        // var username=document.getElementsByClassName("text_name_reg")[0];
        // console.log(username.value);
        var username=$(".text_name_log").val();
        var password=$(".text_pwd_log").val();
        console.log(username,password);
        var opt={
            url:"http://localhost/tonlion-1/php/user.php",
            type:"POST",
            data:{username:username,password:password,type:"login"}
        }
        $.ajax(opt)
        .then(function(res){
            console.log(res);
            if(res=="0"){
                alert("登录失败");
               
            }else{
                alert("登录成功！即将为您跳转到首页");
                location.href="index.html";
            }
        })
    })




    

 })
 







