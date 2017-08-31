window.onload=function(){
	   
	    var box=document.getElementById("box");
	    var pic=document.getElementById("pic");
	    var glas=document.getElementById("glassess");
	    var bigPic=document.getElementById("bigPic");
	    var img=document.getElementById("img");
	 
	 /*鼠标移上去显示放大镜和放大效果*/
	   box.onmouseover=function(){
	   	glassess.style.display="block";
	   	bigPic.style.display="block";
	   }
      /*鼠标移出去隐藏放大镜和放大效果*/
	   box.onmouseout=function(){
	   	glassess.style.display="none";
	   	bigPic.style.display="none";
	   }
	   
	   /*将鼠标位置放到放大镜中间*/
	   box.onmousemove=function(e){
	   	 var scale = 3;//图片的放缩比例  
	   	 e=e||window.event;
	   	//将放大镜的宽高按照图片比例缩放
	   	glas.style.width=parseInt(box.offsetWidth/scale)+"px";
	   	glas.style.height=parseInt(box.offsetHeight/scale)+"px";
	   	
	   	//设置放大图片的宽高
	   	img.style.width = box.offsetWidth * scale + "px";  
        img.style.height = box.offsetHeight * scale + "px";  
        
        //将鼠标放在放大镜中间
	   	 var x=e.clientX;//鼠标距离窗口的距离
	   	 var y=e.clientY;
	   	 
	   	 var l=x-glas.offsetWidth/2;
	   	 var h=y-glas.offsetHeight/2;
	   	 //设置放大镜的移动范围
	   	 if(l<0){//左右移动范围最小为0
	   	 	l=0;
	   	 }
	   	 if(l>=box.offsetWidth-glas.offsetWidth){//左右移动范围最大为盒子的宽-放大镜的宽
	   	 	l=box.offsetWidth-glas.offsetWidth;
	   	 }
	   	 if(h<0){//上下移动范围最小为0
	   	 	h=0;
	   	 }
	   	 if(h>=box.offsetHeight-glas.offsetHeight){//上下移动范围最大为盒子的高-放大镜的高
	   	 	h=box.offsetHeight-glas.offsetHeight;
	   	 }
//	   	 console.log(l,glas.offsetWidth)
	   	 glas.style.left=l+"px";
	   	 glas.style.top=h+"px";
	   	
	   	//同比例放大
	   	var left=glas.offsetLeft*scale;
	   	var top=glas.offsetTop*scale;
		
		img.style.marginLeft=-(left)+"px";
		img.style.marginTop=-(top)+"px";
		
	
	
	
	   }
	   
	   
	   

}
