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
            console.log(2);
        });
        
        
    }
    new img_move(".item2-man");
    new img_move(".item2-woman");
    


    // function getList(url,main_selector){
    //     if(!url||!main_selector) return 0;
    //     this.url=url;
    //     this.main_selector=main_selector;
    //     this.init();
    // }
    // getList.prototype={
    //     constructor:getList,
    //     init(){
    //         this.page=1;
    //         this.load_data()
    //         .then(function(res){
    //             console.log(res.data.list);
    //             // this.json=res.data.list;
    //             // this.render_page();
    //         }.bind(this))
    //         .fail(function(def,type,err_msg){
    //             console.log(err_msg);
    //             // console.log("加载数据失败...");
    //         })
    //     },
    //     load_data(){
    //         this.opt={
    //             url:this.url,
    //             dataType:"json",
    //             data:{page:this.page},
    //             statusCode:{
    //                 404:function(){
    //                     alert("page not found...");
    //                 },
    //                 403:function(){
    //                     alert("不让访问...");
    //                 }
    //             }
    //         };
    //         return $.ajax(this.opt);
    //     },
    //     render_page(){
    //         this.html="";
    //         this.json.forEach(function(item) {
    //             this.html+="<div class='pure-1'><div class='pure-2'><ul><li>"
    //             this.html+=` <a href='#'>
    //                             <img src=${item.img_url}> 
    //                          </a>
    //                          <h1>${item.desc}</h1>
    //                          <h2>${item.nowPrice}</h2>
    //                          <h3>${item.oldPrice}</h3>`
    //         }.bind(this));
    //         this.html+="</li></ul></div></div>";
    //         this.main_ele.html( this.main_ele.html()+this.html);
     
    //     }
        
    // }
    // new getList("../lib/list1.json",".pane");


    //登录
    function login(){

    }
    //注册
    function register(){

    }

 })
 







