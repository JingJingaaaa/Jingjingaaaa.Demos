var box=document.getElementById("box");
var ulBox=document.getElementById("img_box");
var imgs=document.getElementsByTagName("img");
var point=document.getElementById("botPoint");
var left=document.getElementById("left");
var right=document.getElementById("right");

//给ul中加入li标签
var str=""
for(i=0;i<imgs.length;i++){
	str+="<li></li>";
}
point.innerHTML=str;
var lis=point.getElementsByTagName("li")
lis[0].className="act";


//给左右两个箭头添加点击事件
var num=0;
right.onclick=function(){
		num++;	
		if(num>4){
			num=0;
		}
		ulBox.style.marginLeft=-1000*num+"px";
		for(j=0;j<lis.length;j++){
			lis[j].className="";
		}
		lis[num].className="act";
}


left.onclick=function(){
		num--;	
		if(num==-1){
			num=4;
		}
		ulBox.style.marginLeft=-1000*num+"px";
		for(j=0;j<lis.length;j++){
			lis[j].className="";
		}
		lis[num].className="act";
		
}

//给下方指示器添加事件

for(i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmouseover=function(){
		for(j=0;j<lis.length;j++){
			lis[j].className="";
		}
		var that=this.index;
		lis[that].className="act";
		ulBox.style.marginLeft=-1000*that+"px";
	}
}
var timer;
//设置定时器
timer=setInterval(function(){
		num++;	
		if(num>4){
			num=0;
		}
		ulBox.style.marginLeft=-1000*num+"px";
		for(j=0;j<lis.length;j++){
			lis[j].className="";
		}
		lis[num].className="act";
},2800);

//当鼠标放上后清除定时器
box.onmouseover=function(){
	clearInterval(timer);
}
//鼠标离开后加上定时器
box.onmouseleave=function(){
	timer=setInterval(function(){
		num++;	
		if(num>4){
			num=0;
		}
		ulBox.style.marginLeft=-1000*num+"px";
		for(j=0;j<lis.length;j++){
			lis[j].className="";
		}
		lis[num].className="act";
	},2800);	
}
