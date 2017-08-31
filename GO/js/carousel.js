
var carouselWrap = getCls('carousel-wrap')[0],
	carouselContent = getCls('carousel-content')[0],
	contents = getTag('li',carouselContent),
	leftBtn = getCls('carousel-control-left')[0],
	rightBtn = getCls('carousel-control-right')[0],
	carouselIndicator = getCls('point')[0],
	indicators=0;

var num = 0,len = contents.length-2,carouselTimer = null;

//初始化
init()


/*
 * 左按钮  点击  切换
 * 0	->   	0			
 * 1	->		-540	-num*540
 * 2	->		-1080
 */
rightBtn.onclick = function(){
	changeContents()
};
/*
 * 右
 */
leftBtn.onclick = function(){
	changeContents(true)
}
/*
 * 指示器控制
 */
for(var i=0;i<len;i++){
	indicators[i].index = i;
	indicators[i].onmouseenter = function(){
		num = this.index;	//0 1 2 3
		carouselContent.style.marginLeft = -540*num + 'px'
		addIndicatorsActive()
	}
}

/*
 * 定时器
 */

carouselTimer = setInterval(function(){
	changeContents()
},3000);

/*
 * 鼠标移出 banner区
 * 开启定时器
 */

carouselContent.onmouseleave = function(){
	carouselTimer = setInterval(function(){
		changeContents()
	},3000)
}
/*
 * 鼠标移入 banner区
 * 清除定时器
 */
carouselWrap.onmouseover = function(){
	clearInterval(carouselTimer)
}

/*
 * 初始化,  动态创建指示器Li
 */

function init(){

	var _str = '';
	for(var i=0;i<len;i++){
		_str += '<li></li>'
	}
	carouselIndicator.innerHTML = _str;
	indicators = getTag('li',carouselIndicator);
	indicators[0].className = "active"
}

/*
 * 控制指示器样式
 */
function addIndicatorsActive(){
	for(var j=0;j<len;j++){
		indicators[j].className = ""
	}
	indicators[num].className = "active"
}

/*
 * 控制逻辑
 * @ isRight  true 相当于点右箭头
 */
function changeContents(isRight){
	if(isRight){
		num--
		if(num === -1){
			num = len - 1
		}
	}else{
		num++
		if(num === len){
			num = 0
		}
	}
	move(carouselContent, {
		marginLeft:-540*num
	})
	//carouselContent.style.marginLeft = -540*num + 'px'
	addIndicatorsActive()
}
