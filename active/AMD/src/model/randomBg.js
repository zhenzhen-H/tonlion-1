define(["jquery"],function(){
    function RandomBg(){
    }   
    RandomBg.prototype = {
        constructor:RandomBg,
        init:function(selector){
            this.ele = $(selector);
            if(this.ele.length == 0)return 0;
            this.ele.css("background",function(){
                var r = Math.round(Math.random() * 255);
                var g = Math.round(Math.random() * 255);
                var b = Math.round(Math.random() * 255);
                return `rgb(${r},${g},${b})`;
            })
        }
    }


    return new RandomBg();

})