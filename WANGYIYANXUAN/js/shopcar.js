function $(x){
    return document.querySelector(x);
}
function $s(x){
    return document.querySelectorAll(x);
}
var Price=0;
var btns=$s("li [type=checkbox]");
var btn=$("#all");
var display=$("#allPrice");
var adds=$s('.add');
var minus=$s('.minus');
var shanchu=$s(".del");

var length=btns.length;

var oi = $s("li>span>i");
var xiaoj = $s(".xiaoj");
// 计算总价
function allPrice(){
    Price=0;
    for(var i=0;i<length;i++){
        if(btns[i].checked){
            Price += parseInt($s("[num='']")[i].value) * parseInt($s("li i")[i].innerHTML);
            var oiatt = oi[i].getAttribute("class");
            xiaoj[i].innerHTML = "小计¥：" + parseInt(oiatt) * parseInt($s("[num='']")[i].value)
        }
    }
    display.value=Price;
}
// 全选按钮
btn.onclick=function(){
    for(var i=0;i<length;i++){
        btns[i].checked=this.checked;
    }
    if(this.checked){
        allPrice();
    }else{
        Price = 0;
        display.value = 0;
    }
}
// 添加商品数量和减少商品数量
for(var i=0;i<adds.length;i++){
    adds[i].index=i;
    minus[i].index=i;
    adds[i].onclick=function(){
        var num=$s("[num='']")[this.index].value;
        $s("[num='']")[this.index].value = ++num;
        btns[this.index].checked=true;
        allPrice();
        panduan();
    }
    minus[i].onclick=function(){
        var num=$s("[num='']")[this.index].value;
        if(num <=1){
            $s("[num='']")[this.index].value = 1;
        }
        else{
            $s("[num='']")[this.index].value= --num;
            btns[this.index].checked=true;
        }
        allPrice();
        panduan();
    }
}
for(var i=0;i<length;i++){
    btns[i].onclick=function(){
        panduan();
    }
}

// 根据商品复选框的条件判断来判断全选框是否全选
function panduan(){
    for(var i=0;i<length;i++){
        var isTrue=true;
        if(btns[i].checked==false){
            btn.checked=false;
        }
        else if(btns[i].checked==true){
            for(var i=0;i<length;i++){
                if(btns[i].checked==false){
                    isTrue=false;
                }
            }
            if(!isTrue){
                btn.checked=false;
            }
            else{
                btn.checked=true;
            }
        }
        allPrice();
    }
}
// 删除商品
for(var i=0;i<shanchu.length;i++){
    shanchu[i].index=i;
    shanchu[i].onclick=function(){
        $s(".item-1")[this.index].style.display = 'none';
        $s(".item-1 [type='checkbox']")[this.index].checked = false;
        allPrice();
    }
}
console.log(shanchu)