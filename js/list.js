$(function(){
    function waterFall(url,selector){
        if(!url||!selector) return 0;
        this.url=url;
        this.selector=$(selector);
        this.init();
    }
    waterFall.prototype={
        constructor:waterFall,
        init(){
            this.page=1;
            this.load_data()
            .then(function(res){
                this.json=res.data.list;
                this.render_page();
                this.sort_item();
            }.bind(this))
            .fail(function(def,type,err_msg){

            })
            $(document).on("scroll",$.proxy(this.is_load,this))
        },
        load_data(){
            this.opt={
                url:this.url,
                dataType:"jsonp",
                data:{page:this.page},
                statusCode:{
                    404:function(){
                        alert("page not found");
                    },
                    403:function(){
                        alert("不让访问");
                    }
                }
            };
            return $.ajax(this.opt);
        },
        render_page(){
            this.html="";
            this.json.forEach(function(item){
                this.html+=`<div class="product">
                                <div class="product_iwrap">
                                    <div class="productImg_wrap">
                                        <a href="">
                                        <img src=${item.image}>
                                        </a>
                                    </div>
                                    <p class="productPrice">
                                        <em title=${item.price}>￥209元</em>
                                        <del>￥499元</del>
                                    </p>
                                    <p class="productTitle">
                                        <a href="">${item.title}</a>
                                    </p>
                                </div>
                            </div> `
            }.bind(this)); 
            console.log(this.selector)
            this.selector.html(this.selector.html()+this.html);
        },
        sort_item(){
            // this.children=this.selector.find(".product");
            var heightArray=[];
            for(var i=0;i<16;i++){
                if(i<5){
                    heightArray.push($(this.children[i]).height());
                }else{
                    var minHeight=Math.min.apply(false,heightArray);
                    var minIndex=heightArray.indexOf(minHeight);
                    // this.children.eq(i).css({
                    //     position:"absolute",
                    //     left:this.children.eq(minIndex).position().left+5,
                    //     top:minHeight+=10
                    // })
                    heightArray[minIndex]=minHeight+this.children.eq(i).height();

                }
            }

        },
        load_err(){
            alert("对不起报错了");
        },
        is_load(){
            this.scrollTop=$("html,body").scrollTop();
            this.clientHight=document.documentElement.clientHeight;
            // this.lastTop=this.selector.find(".product").eq(this.selector.find(".product").length-1).position().top;
   
            this.loading=false;
            if(this.scrollTop+this.clientHeight>=this.lastTop){
                this.loading=true;
            }
            if(!this.loading||this.loading_msg) return 0;
            this.loading_msg=true;
            this.page++;
            this.load_data()
            .then(function(res){
                this.json=res.data.list;
                this.render_page();
                this.sort_item();
                this.loading_msg=false;
            }.bind(this))
        
        }
    }
    new waterFall("http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=0&trace=0&limit=10&endId=0&pid=106888&_=1526369583128",".grid_wrap");
})







                       
                            
                                
                                   
                                
                           
                            