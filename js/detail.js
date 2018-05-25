$(function(){
	//放大镜
    function Magnifier(options){
		this.small_ele = $(options.small_ele);
		this.focus_ele = $(options.focus_ele);
		this.big_ele = $(options.big_ele);
		if(this.small_ele.length == 0 || this.focus_ele.length == 0 || this.big_ele.length == 0) return;
		this.init();
	}
	Magnifier.prototype = {
		constructor:Magnifier,
		init(){
			//绑定鼠标移入事件;
			this.scale = this.big_ele.width() / this.focus_ele.width();
			this.ratio();
			this.small_ele.on("mouseenter",{hidden:false},$.proxy(this.toggleFocus,this));
			this.small_ele.on("mouseleave",{hidden:true},$.proxy(this.toggleFocus,this));
			this.small_ele.on("mousemove.smallMove",$.proxy(this.smallMove,this));
			this.small_ele.on("mousemove.bigMove",$.proxy(this.bigMove,this));
			// this.small_ele.on("mousewheel",$.proxy(this.ratio,this));

			// this.small_ele[0].onmousewheel = function(event){
			// 	//谷歌;
			// 	var evt = event || window.event;
			// 	// console.log(evt.wheelDelta);
			// 	//传参调用 ratio => 传入 谷歌 | 当前实现对象里的事件信息;
			// 	this.ratio("ch",evt.wheelDelta);
			// }.bind(this);
			// this.small_ele[0].addEventListener("DOMMouseScroll",function(event){
			// 	// console.log(event.detail);
			// 	this.ratio("ff",event.detail);
			// }.bind(this));
			
		},
		//设置小灰框和大图的显示和隐藏
		toggleFocus(event){
			var opacity_img = this.small_ele.find(".opacity-img");
			var grayBox=this.focus_ele;
			// console.log(grayBox);
			if(event.data.hidden){
				this.focus_ele.stop().fadeOut(200);
				this.big_ele.stop().fadeOut(200);
				// opacity_img.stop().fadeTo("fast",1);
				// grayBox.stop().fadeTo("fast",1);
				grayBox.removeClass("gray");
			}else{
				this.focus_ele.stop().fadeIn(200);
				this.big_ele.stop().fadeIn(200);
				// opacity_img.stop().fadeTo("fast",0.5);
				grayBox.stop().fadeTo("fast",0.5);
				grayBox.addClass("gray");
			}
		},
		smallMove(event){
			var eleX = event.offsetX-this.focus_ele.width()/2;
			var eleY = event.offsetY-this.focus_ele.height()/2;
			console.log(eleX,eleY);
			// 边界检测;
			var maxWidth = this.small_ele.width() - this.focus_ele.width();
			var maxHeight = this.small_ele.height() - this.focus_ele.height();

			eleX = eleX <= 0 ? 0 : eleX;
			eleX = eleX >= maxWidth ?  maxWidth : eleX;
			
			eleY = eleY <= 0 ? 0 : eleY;
			eleY = eleY >= maxHeight ?  maxHeight : eleY;
			
			
			this.focus_ele.css({
				left:eleX,
				top:eleY,
				backgroundPosition:`${-eleX}px ${-eleY}px`
			})

			var fullLongX = this.small_ele.width() - this.focus_ele.width();
			var fullLongY = this.small_ele.height() - this.focus_ele.height();
			this.propX = Math.round(eleX / fullLongX * 100);
			this.propY = Math.round(eleY / fullLongY * 100);
			// console.log(this.propX,this.propY); 
		},
		bigMove(){
			var bigImg = this.big_ele.find("img")
			var fullLongX = bigImg.width() - this.big_ele.width();
			var fullLongY = bigImg.height() - this.big_ele.height() ;
			
			var eleX = -Math.round(fullLongX * this.propX / 100);
			var eleY = -Math.round(fullLongY * this.propY / 100);
			
			bigImg.css({
				left:eleX,
				top:eleY
			})
			// console.log(eleX);
		},
		ratio(browser_type,data){
			// 初始化逻辑;
			// 不传参数为缩放大图功能;
			if(!browser_type || !data){
				//1.按比例缩放大图;
				var bigImg = this.big_ele.find("img");
				bigImg.css({
					width:Math.round(this.small_ele.width() * this.scale),
					height:Math.round(this.small_ele.height() * this.scale)
				});
				// 如果我做了这件事，那么其余的事我就不做了;
				return 0;
			}

			//传递参数为鼠标滚轮 事件 处理函数 ;
			//滚轮逻辑;
			//向下滚是变小的;
			//向上滚是变大的;
			var turn;
			if(browser_type == "ch"){
				data > 0 ? turn = "top" : turn = "bottom";
			}else if(browser_type == "ff"){
				data > 0 ? turn = "bottom" : turn = "top";
			}
			// console.log(turn);
			//让小框宽高动起来;
			
			var focus_ele_width = this.focus_ele.width() ;
			var focus_ele_height = this.focus_ele.height() ;

			if(turn == "top"){
				if(this.focus_ele.width() <= this.small_ele.width() * 0.8){
					this.focus_ele
					.css({
						width:"+=2",
						height:"+=2",
						top:"-=1",
						backgroundPosition:`${-this.focus_ele.position().left+1}px ${-this.focus_ele.position().top+1}px`
					})

					var left = this.focus_ele.position().left;
					left = left <= 0 ? 0 : left - 1;
					this.focus_ele.css({
						left:left
					})
				}
				//重新计算 比例值;
			}else if(turn == "bottom"){
				if(this.focus_ele.width() >= this.small_ele.width() * 0.1){
					this.focus_ele
					.css({
						width:"-=2",
						height:"-=2",
						left:"+=1",
						top:"+=1",
						backgroundPosition:`${-this.focus_ele.position().left-1}px ${-this.focus_ele.position().top-1}px`
					})
				}
			}

			this.scale = this.big_ele.width() / this.focus_ele.width();
			this.ratio();
			this.bigMove();
		}	
	}
	// smallMove;
	new Magnifier({
		small_ele:".small",
		focus_ele:".grayBox",
		big_ele:".big"
	});

	//商品详情与评论的切换
	function change(){
		// alert(1);
		this.tab1=$(".tab1");
		this.tab2=$(".tab2");
		this.detail=$(".detail");
		this.comment=$(".comment");
		// console.log(this.detail,this.comment);
		this.init();
	}
	change.prototype={
		constructor:change,
		init(){
			this.changeToDel();
		},
		//切换到详情
		changeToDel(){
			this.tab1.css({"display":"block"});
			this.tab2.css({"display":"none"});
			this.comment.removeClass("active");
			this.detail.addClass("active");
			this.comment.on("click",function(){
				this.changeToCom();
			}.bind(this))
		},
		//切换到评论
		changeToCom(){
			this.tab1.css({"display":"none"});
			this.tab2.css({"display":"block"});
			this.detail.removeClass("active");
			this.comment.addClass("active");
			this.detail.on("click",function(){
				this.changeToDel();
			}.bind(this))
		}
	}
	new change();

})