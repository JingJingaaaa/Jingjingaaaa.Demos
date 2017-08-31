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
	for(var i=1;i<item.length;i++){
		(function(index){
			item[i].onmouseover=function(){
				item[index].style.color='#B4A078'
			}
			item[i].onmouseout=function(){
				item[index].style.color='#333'
			}
		})(i);
	}
}
