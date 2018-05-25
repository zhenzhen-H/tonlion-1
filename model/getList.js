// define(["jquery"],function(){
//     function getList(url,main_selector){
        
//         if(!url||!main_selector) return 0;
//         this.url=url;
//         this.main_selector=$(main_selector);
//         this.init();
//     }
//     getList.prototype={
//         constructor:getList,
//         init(){
//             // alert(1);
//             this.page=1;
//             this.load_data()
//             .then(function(res){
//                 // console.log(res.list);
//                 this.json=res.list;
//                 this.render_page();
//             }.bind(this))
//             .fail(function(def,type,err_msg){
//                 console.log(err_msg);
//                 // console.log("加载数据失败...");
//             })
//         },
//         load_data(){
//             // alert(1);
//             this.opt={
//                 url:this.url,
//                 dataType:"json",
//                 data:{page:this.page},
//                 statusCode:{
//                     404:function(){
//                         alert("page not found...");
//                     },
//                     403:function(){
//                         alert("不让访问...");
//                     }
//                 }
//             };
//             return $.ajax(this.opt);
//         },
//         render_page(){
//             this.html="";
//             this.json.forEach(function(item) {
//                 this.html+=` <div class="pure-1">
//                                 <div class="pure-2">
//                                     <ul>
//                                         <li>
//                                             <a href="#">
//                                                 <img src=${item.img_url}> 
//                                             </a>
//                                             <h1>${item.desc}</h1>
//                                             <h2>${item.nowPrice}</h2>
//                                             <h3>${item.oldPrice}</h3>
//                                         </li> 
//                                     </ul>
//                                 </div>  
                
//                             </div>`;
                
//             }.bind(this));
           
//             // alert(this.html);
//             // alert(this.main_selector);
//             this.main_selector.html(this.main_selector.html()+this.html);
     
//         }
        
//     }
//     // new getList("http://localhost/tonlion-1/lib/list1.json",".pane");
// })




;+function(factory){
    //AMD判断;
    if(typeof define === "function" && define.amd){
       define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
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
    $.getList=getList;
    return getList;
})