window.onload=function(){
	//导航栏固定,侧边栏返回顶部
	var div1 = document.getElementsByClassName("headtop")[0];
    window.onscroll = function () {
        var top1 = document.documentElement.scrollTop || document.body.scrollTop;
        if(top1 > 150){
        	
        }else {
           
        }
    }
	var Top=document.querySelectorAll(".rightnav li")[5];
	window.onscroll = function () {
            var top1 = document.documentElement.scrollTop || document.body.scrollTop;
            if(top1 > 150){
            	Top.style.display="block"
            	div1.style.display="block"
            	div1.style.position = "fixed";
            }else{
            	Top.style.display="none"
            	div1.style.display="none"
            	 div1.style.position = "relative";
            }
    }	
	Top.onclick=function(){
		var timer=setInterval(function(){
			var top1=document.body.scrollTop || document.documentElement.scrollTop;
			top1-=100;
			if(document.documentElement.scrollTop){
				document.documentElement.scrollTop=top1;
			}else{
				document.body.scrollTop=top1;
			}
			if(top1<0){
				clearInterval(timer);
				return;  
			}
		},1)
	}
	//导航栏字体颜色
	var item=document.querySelectorAll('.item a');
	for(var i=0;i<item.length;i++){
		(function(index){
			item[i].onmouseover=function(){
				item[index].style.color='#B4A078';
			}
			item[i].onmouseout=function(){
				item[index].style.color='#333'
			}
		})(i);
	}
	//图片轮播
	var content = document.getElementsByClassName("b-connet")[0];
	var	arrowLeft = document.querySelector(".arrow-left");
	var	arrowRight = document.getElementsByClassName("arrow-right")[0];
	var	indicator = document.querySelectorAll(".indicator li");
	var	banner = document.querySelector(".b-row");
	var num=0;
	var imgWidth = banner.offsetWidth
	arrowRight.onclick=function(e){
		e=e || window.event
		e.preventDefault();
		num--
		if(num==-5){
			num=0
		}
		changeindicator(Math.abs(num))
	}
	arrowLeft.onclick=function(e){
		e=e || window.event
		e.preventDefault();
		num++
		if(num==1){
			num=-4
		}
		changeindicator(Math.abs(num))
	}
	for(var i=0;i<indicator.length;i++){
		indicator[i].index=i;
		indicator[i].onclick=function(){
			num=-this.index
			changeindicator(Math.abs(num))
		}
	}
	function changeindicator(index){
		for(var j=0;j<indicator.length;j++){
			indicator[j].className=""
		}
		indicator[index].className="active"
		content.style.left=num*imgWidth+"px";
	}
	function intervalbanner(){
	    timer=setInterval(function(){
		num--
		if(num==-5){
			num=0
		}
		changeindicator(Math.abs(num))
		},2500)
	    
	}
	intervalbanner()
	banner.onmouseover=function(){
		clearInterval(timer)
	}
	banner.onmouseout=function(){
		intervalbanner()
	}
	//图片切换
	var img=document.getElementsByClassName('item-img');
	var img_active=document.getElementsByClassName('n-active');
	var img_active1=document.getElementsByClassName('n-active1');
	for(var i=0;i<img.length;i++){
		(function(index){
			img[i].onmouseover=function(){
				img_active[index].style.display="none";
				img_active1[index].style.display="block";
			}
			img[i].onmouseout=function(){
				img_active[index].style.display="block";
				img_active1[index].style.display="none";
			}
		})(i);
		
	}
	//获取cookie 欢迎用户
	
	var wel=document.getElementById('login');
	var wel2=document.getElementById('regist')
	var wel3=document.getElementById('relogin')
	var _cookie = document.cookie;	//username=wally
	var arr = _cookie.split("=");
	var value=null;
	for(var i=0;i<arr.length;i++){
		if(arr[0].trim() === "username"){
			wel.innerHTML="欢迎"+arr[1];
			wel2.style.display="none";
			wel3.style.display="block"
			value=arr[1];
		}
	}
	function setCookie(key, value, time){
		var date = new Date()
		date.setDate(date.getDate() + time)
		document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + date
	}
	function removeCookie(key){
		setCookie(key,value,-1)
	}
	console.log(value)
	wel3.onclick=function(){
		wel.innerHTML="登录"
		wel2.style.display="block";
		wel3.style.display="none"
		removeCookie("username")
	}
}
