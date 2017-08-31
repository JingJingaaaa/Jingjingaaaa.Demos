//获取每个楼层高度并将其存进数组中
var arr=[];
var aDiv=document.getElementById("content").children;//获取每个div楼层
	for(var i=0;i<aDiv.length;i++){//得到每个楼层距頂部的高度，遍历存入数组arr中
		var everyHeight=aDiv[i].offsetTop;
		arr.push(everyHeight);
	}
	arr.push(document.body.offsetHeight);//获取整个页面高度并追加到arr中
var left_a=document.getElementsByTagName("a");//获取左侧导航的每个a标签

console.log(arr);


var _index;
window.onscroll=function(){
//获取滚动条高度
	var h=document.documentElement.scrollTop||document.body.scrollTop-800+"px";
console.log(h);
	//将每个楼层高度和滚动条高度进行比较
	for(var i=0;i<arr.length;i++){
		if(arr[i]<=h&&h<arr[i+1]){
			if(_index===i){return;}//如果滚动条在当前楼层高度内跳出这个函数

			_index=i;//存储下标
			break;
		}
	}
//将左侧导航栏背景颜色变化
	for(var j=0;j<left_a.length;j++){
		left_a[j].className="";//清除所有a标签的class
	}

	left_a[_index].className="active";
};
//点击左侧导航中间内容跳转
	for(var i=0;i<left_a.length;i++){
		left_a[i].index=i;
		left_a[i].onclick=function(){
			_index = this.index;
			for(var j=0;j<left_a.length;j++){
				left_a[j].className="";
			}
			this.className="active";
			if(document.body.scrollTop){
				document.body.scrollTop=arr[this.index];
			}else{
				document.documentElement.scrollTop=arr[this.index];
			}
		}
	}
