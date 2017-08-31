window.onload=function(){
    var bool=false,old=0;
    var tabs=document.getElementById("tab_ul1").children;
    var lis=document.getElementById("tab_content").children;

    //dian.onclick=function (){
    //    if(bool===false){
    //        show();
    //        bool=true;
    //    }else{
    //        hidden();
    //        bool=false;
    //
    //    }
    //}
//标签转化
    for(var i=0;i<tabs.length;i++){
        tabs[i].index=i;
        tabs[i].onclick=function(){
            remove(old);
            old=this.index;
            add(this.index);
            console.log(this.index);
        }
    }
    function add(o){
        tabs[o].className="show";
        lis[o].className="tab_ul2 xianshi";
    }
    function remove(o){
        tabs[o].removeAttribute("class");
        lis[o].className="tab_ul2";

    }
}
/**
 * Created by Jingjing on 2017/8/31.
 */
