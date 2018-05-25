//弹出层模块;
define(["jquery"],function(){
    // console.log($);
    //Pop功能;
    function Pop(){
    }
    Pop.prototype = {
        constructor:Pop,
        init(selector,value_selector){
            this.btn = $(selector)
            if(!this.btn) return ;
            this.btn.on("click.toggle",$.proxy(this.toggle,this))

            if(value_selector){
                this.value = $(value_selector);
                this.btn.on("click.writeEle",$.proxy(this.writeEle,this))
            }   
        },
        toggle(){
            //是否在页面上创建过元素;
            // .pop-ele;
            if($(".pop-ele").length == 0){
                var ele = $("<div>")
                ele
                .addClass("pop-ele")
                .css({
                    width:document.documentElement.clientWidth,
                    height:document.documentElement.clientHeight,
                    background:`rgba(0,0,0,.3)`,
                    position:"absolute",
                    left:0,
                    top:0,
                    zIndex:999
                })

                $("body").append(ele);

                ele.on("click",function(){
                    ele.toggle();
                })
            }else{
                $(".pop-ele").toggle();
            }
        },
        writeEle(){
            if($(".pop-ele")){
                $(".pop-ele").html(this.value.val());
            }
        }
    }
    return new Pop();
})