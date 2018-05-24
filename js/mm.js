$(function(){
    $.ajax({url:"http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=0&trace=0&limit=10&endId=0&pid=106888&_=1526369583128",dataType:"jsonp"})
    .then(function(res){
        var json = res.data.list;
        // console.log(json); 
        rander(json);
        
    })
})

function rander(json){
    var shopArray = JSON.parse($.cookie("shopCar"));
    // console.log(shopArray);
    var html = "";
    json.forEach(function(item){
        shopArray.forEach(function(list){
            if(item.item_id == list.id){
                html +=`<li class="item" data_id="${item.item_id}">
                            <div class="msg">
                                <img src=${item.image} alt="">
                                <h5>${item.title}</h5>
                            </div>
                            <div class="operation">
                                    <button>-</button>
                                    <input type="text" value=${list.num}>
                                    <button>+</button>
                            </div>
                            <a href="#javascript" class="delete">删除</a>
                        </li>
                        `
            }
        })
    })
    $("#list").html(html);
    clearShop()
}

function clearShop(){
    $(".delete").on("click",function(){
        var delet_id = $(this).parent().attr("data_id");
        var shopArray = JSON.parse($.cookie("shopCar"));
        shopArray.forEach(function(item,index){
            if(item.id == delet_id){
                shopArray.splice(index,1);
            }
        })
        $.cookie("shopCar",JSON.stringify(shopArray));
        location.reload();         
    })
}
