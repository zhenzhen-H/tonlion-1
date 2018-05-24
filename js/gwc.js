$(function(){
    function getList(url,selector){
        this.url=url;
        this.selector=$(selector);
        this.init();
    }
    getList.prototype={
        constructor:getList,
        init(){
            this.loading()
            .then(function(res){
                // console.log(res.data.list);
                var json=res.data.list;
                // console.log(json);
                this.render(json);
            }.bind(this))
            this.carNum=$(".car");
            this.carNum.html(this.getSum());
        },
        loading(){
            var opt={
                dataType:"jsonp",
                url:this.url
            }
            return $.ajax(opt);
        },
        render(json){
            // alert(1);
            var shopArray=JSON.parse($.cookie("shopCar"));
            // console.log(shopArray);
            var html="";
            json.forEach(function(item){
                shopArray.forEach(function(list){
                    if(item.item_id==list.id){
                        html+=`
                                <li class="item">
                                    <div class="msg">
                                        <img src="${item.image}" alt="">
                                        <h5>${item.title}</h5>
                                    </div>
                                    <div class="operation">
                                        <button>-</button>
                                        <input type="text" value="${list.num}">
                                        <button>+</button>
                                    </div>
                                    <a href="#javascript" class="delete">删除</a>
                                </li>
                                `;
                    }
                })
            });
            $("#list").html(html);
            clearShopCar();
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
    new getList("http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=0&trace=0&limit=10&endId=0&pid=106888&_=1526369583128",".grid_wrap");

    function clearShopCar(){
        $(".delete").on("click",function(){
            var delete_id=$(this).parent().attr("data_id");
            var shopArray=JSON.parse($.cookie("shopCar"));
            shopArray.forEach(function(item,index){
                if(item.index==delete_id){
                    shopArray.splice(index,1);
                }
            })
            $.cookie("shopCar",JSON.stringify(shopArray));
            location.reload();
        })
    }
})