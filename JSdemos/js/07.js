var nav=document.getElementById("nav");
var lis=document.getElementsByTagName("li");
var left=document.getElementById("left");
var all=document.getElementById("all");
var aDiv=document.getElementsByClassName("sen hid");
var aP=document.getElementsByClassName("type");

for(i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmouseover=function(){
		for(j=0;j<lis.length;j++){
			lis[j].className=""
		}
		var that=this.index;
		lis[that].className="act";
	}
}

all.onmouseover=function(){
	left.setAttribute("style","display: block;");
}
all.onmouseout=function(){
	left.setAttribute("style","display: none;");
}


for(k=0;k<aP.length;k++){
	aP[k].index=k;
	aP[k].onmouseover=function(){
	 	var _index=this.index;
		for(l=0;l<aDiv.length;l++){
			aP[l].style.background="antiquewhite"
			aDiv[l].setAttribute("style","display:none;");
		}
			aP[_index].style.background="sandybrown"
			aDiv[_index].setAttribute("style","display: block;");
	}
}
for(k=0;k<aP.length;k++){
	aP[k].index=k;
	aP[k].onmouseout=function(){
	 	var _index=this.index;
		for(l=0;l<aDiv.length;l++){
			aP[l].style.background="antiquewhite"
			aDiv[l].setAttribute("style","display:none;");
		}
			aP[_index].style.background="antiquewhite"
			aDiv[_index].setAttribute("style","display: none;");
	}
}
