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
                                        <em>￥${item.discountPrice}元</em>
                                        <del>￥${item.price}元</del>
                                    </p>
                                    <p class="productTitle">
                                        <a href="">${item.title}</a>
                                    </p>
                                    <button class="btn1">加入购物车</button>
                                </div>
                            </div> `
            }.bind(this)); 
            // console.log(this.selector)
            this.selector.html(this.selector.html()+this.html);
        },
        sort_item(){
            this.children=this.selector.find(".product");
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
    // new waterFall("http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=0&trace=0&limit=10&endId=0&pid=106888&_=1526369583128",".grid_wrap");



    function shopCar(url,selector){
        this.url=url;
        this.selector=$(selector);
        this.init();
    }
    shopCar.prototype={
        constructor:shopCar,
        init(){
            this.loading()
            .then(function(res){
                // console.log(res);
                this.json=res.data.list;
                this.render();
            }.bind(this));
            this.carNum=$(".car");
            this.carNum.html(this.getSum());
            console.log(this.getSum());
            console.log(this.carNum.html(this.getSum()));
            this.selector.on("click.addCar","button[data-id]",$.proxy(this.addCar,this));
            this.selector.on("click.changeNum","button[data-id]",$.proxy(this.changeNum,this));
        },
        loading(){
            var opt={
                dataType:"jsonp",
                url:this.url
            }
            return $.ajax(opt);
        },
        render(){
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
                                        <em>￥${item.discountPrice}元</em>
                                        <del>￥${item.price}元</del>
                                    </p>
                                    <p class="productTitle">
                                        <a href="">${item.title}</a>
                                    </p>
                                    <button class="btn1" data-id=${item.item_id}>加入购物车</button>
                                </div>
                            </div> `
            }.bind(this)); 
            // console.log(this.selector)
            this.selector.html(this.selector.html()+this.html);
        },
        addCar(event){
            var target=event.target||event.srcElement;
            var goodsId=$(target).attr("data-id");
            // console.log(goodsId);
            if(!$.cookie("shopCar")){
                var shopCarArray=[
                    {
                        id:goodsId,
                        num:1
                    }                   
                ];
                $.cookie("shopCar",JSON.stringify(shopCarArray));
                //JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
                //JSON.stringify() 方法用于将 JavaScript 值(对象或者数组)转换为 JSON 字符串。
                return 0;
            }

            var shopCarString=$.cookie("shopCar");
            var shopCarArray=JSON.parse(shopCarString);

            var hasItem=false;
            shopCarArray.forEach(function(item){
                if(item.id==goodsId){
                    item.num++;
                    hasItem=true;
                }
            })
            if(!hasItem){
                var item={
                    id:goodsId,
                    num:1
                }
                shopCarArray.push(item);
            }
            $.cookie("shopCar",JSON.stringify(shopCarArray));
            // console.log($.cookie("shopCar"));
        },
        changeNum(){
            this.carNum.html(this.getSum());
        },
        getSum(){
            var shopCarString=$.cookie("shopCar");
            if(shopCarString){
                var shopCarArray=JSON.parse(shopCarString);
                var sum=0;
                shopCarArray.forEach(function(item){
                    sum+=Number(item.num);
                })
                return sum;
            }
            return 0;
        }
    }
    new shopCar("http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=0&trace=0&limit=10&endId=0&pid=106888&_=1526369583128",".grid_wrap");
})







                       
                            
                                
                                   
                                
                           
                            