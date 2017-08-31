window.onload=function(){
    var modal_search=document.getElementById("search_page");
    var ser_con=document.getElementById("ser_con");
    /*打开搜索页面*/
    ser_con.onclick=function(){
        modal_search.style.display="block";
    };
    /*返回主页*/
    var back_icon=document.querySelector("#search_button_gs_back");
    back_icon.onclick=function(){
        modal_search.style.display="none";
    };

    var m_search_ipt=document.getElementById("js-search-keyword-text");
    /*搜索*/
    m_search_ipt.oninput=function(){
        var key=$("#js-search-keyword-text").val();
        console.log(2)
        $.getJSON("script/tourise.json",{word:key}, function (res,status) {
            var str="";
            console.log(res,status)
            if(key){
                $.each(res.datas,function(index,item){
                    if(item.districtname.indexOf(key)>=0||item.word.includes(key)==true){
                        str+=`<a href="${item.url}"><li>${item.word}<span>${item.districtname}</span>
								<i class="iconfont icon-jiantou2"></i>
			 				</li></a>`;
                    }
                    $(".search-ul").html(str);
                })
            }else{
                str=`<li keyword="签证">签证<i class="iconfont icon-jiantou2"></i></li>
                    <li keyword="WIFI">WIFI<i class="iconfont icon-jiantou2"></i></li>
                    <li keyword="攻略">攻略<i class="iconfont icon-jiantou2"></i></li>
                    <li keyword="门票">门票<i class="iconfont icon-jiantou2"></i></li>
                    <li keyword="旅游">旅游<i class="iconfont icon-jiantou2"></i></li>
                    <li keyword="优惠券">优惠券<i class="iconfont icon-jiantou2"></i></li>
                    <li keyword="机票">机票<i class="iconfont icon-jiantou2"></i></li>
                    <li keyword="酒店">酒店<i class="iconfont icon-jiantou2"></i></li>`
                $(".search-ul").html(str);
            }


        })
    }

};