var snake=[];//创建蛇的身体
var dir;//设定蛇方向变量
var foodID;
var bool,bool2=true;
var s_time;
window.onload=function(){//页面加载完函数也执行完毕
	init();//不要忘记调用函数
	creatSHead();
	creatFood();
	getDir();
}

//初始化背景，用表格，写在初始化函数中
function init(){
	for (var i=0;i<30;i++) {
		var t_tr=document.createElement("tr");//创建行
		for (j=0;j<30;j++) {
			var t_td=document.createElement("td");//创建列
			t_td.className="class"+Math.floor(Math.random()*3+1);//向下取随机数
			t_td.id=i+"-"+j;
			t_tr.appendChild(t_td);//行中追加列
		}
		document.getElementById("bg").appendChild(t_tr);//表格中追加行
	}
}


//创建蛇头
function creatSHead(){
	var snakeID=getID();
	document.getElementById(snakeID).className+=" s_head";
	snake.push(snakeID);//将蛇头传进蛇身体的数组中
}

//创建食物
function creatFood(){
	foodID=getID();
	document.getElementById(foodID).className+=" food";
	console.log(foodID)
}
//随机获得蛇头ID
function getID(){
	var x=Math.floor(Math.random()*30);
	var y=Math.floor(Math.random()*30);
	return x+"-"+y;   //TypeError: document.getElementById(...) is null这种错误要记得返回x+"-"+y给调用者
}


//获取蛇开始走的方向
function getDir(){
	//按下方向键，得到键值并返回给dir
	document.onkeydown=function(event){//创建一个键值事件就会有对应的event对象产生
		var e=window.event||event;
		//保证得到的键值只能是方向键，并且不能往回走
		if(bool2){
			switch (e.keyCode){//用来确定dir的值是多少，并且不能回走
				case 37: if(dir===39){return};dir=37;break;
				case 38: if(dir===40){return};dir=38;break;
				case 39: if(dir===37){return};dir=39;break;
				case 40: if(dir===38){return};dir=40;
			}
		}
		bool2=false;
		
		if(bool){return;}//设定一个布尔值判断计时器是否触发，并只让其触发一次
		s_time=setInterval(step,220);
		bool=true;
		//摁键完后调用行走函数，摁键后才得到dir的值。
	}
}


//蛇行走的方法
function step(){
	//先获得此刻蛇头的ID，并将其拆成x，y两个数字
	newHeadX=snake[0].split("-")[0]-0; //snake[0].split("-")得到的是当前蛇头的拆分为数组，其内容为字符串，例如：["1","2"]
	newHeadY=snake[0].split("-")[1]-0;
	//判断下一步行走的方向,并改变蛇头ID，
	switch(dir){
		case 37:newHeadY-=1;break;
		case 38:newHeadX-=1;break;
		case 39:newHeadY+=1;break;
		case 40:newHeadX+=1;
	}
	//建一个新蛇头，并追加到数组snake[]中
	var newHead=newHeadX+"-"+newHeadY;
	
	//判断游戏GAME OVER
	if(newHeadX<0||newHeadY<0||newHeadX>=30|| newHeadX>=30||document.getElementById(newHead).className.indexOf("s_head")!=-1){
		clearInterval(s_time);//当符合死亡条件时，就清除定时器
		alert("game over");
		return;//因为下面还会有蛇行走的代码，故而结束游戏时跳出函数。
	}
	
	
	
	
	//将新的蛇头ID追加到数组中，蛇可以走啦！
	snake.unshift(newHead);//unshift是将新的蛇头ID追加到数组snake[]最前面
	var del=snake.pop();//删除数组中最后一个元素并且得到该元素
	document.getElementById(newHead).className +=" s_head";//将新的蛇头的颜色改变
	document.getElementById(del).className=document.getElementById(del).className.replace(" s_head","");//将原来的蛇头颜色删去，去repla来去掉s_head类名即可
	bool2=true;//确保蛇按键蛇执行完该按键所对应的行走方法
	
	
//蛇吃食物
	if(foodID===snake[0]){
		document.getElementById(foodID).className=document.getElementById(foodID).className.replace(" food"," s_head");//将原来的食物颜色换成蛇头颜色，去repla来代替s_head类名即可
		snake.push(foodID);//增加蛇身，将吃掉的食物ID追加到snake[]数组中
		creatFood();//创建一个新的随机食物
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
var outer1 = document.getElementById("outer1");
outer1.onmouseover = function() {
	move1(0);
}
outer1.onmouseout = function() {
	move1(-150);
}
var timer1;

function move1(aim) {
	clearInterval(timer1);
	timer1 = setInterval(function() {
		var speed = 0;
		if(outer1.offsetLeft < aim) {
			speed = 10;
		}
		if(outer1.offsetLeft > aim) {
			speed = -10;
		}
		if(outer1.offsetLeft === aim) {
			clearInterval(timer1);
		} else {
			outer1.style.left = outer1.offsetLeft + speed + "px";
		}

	}, 20);
}
