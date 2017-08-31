function ajax(method,url,fnSuccess,fnError){
			var xhr=new XMLHttpRequest();
			xhr.open(method,url,true);
			xhr.send();
			xhr.onreadystatechange=function(){
				if(xhr.readyState===4){
					if(xhr.status===200){
						if(fnSuccess && typeof fnSuccess =="function"){
							fnSuccess(xhr)
						}
					}
				}
			}
		}
		
			ajax("get","http://api.douban.com/v2/movie/top250",function(xhr){
				var res=xhr.responseHTML;
//				var res=xhr.responseXML;
				console.log(res)//豆瓣会出现跨域问题
			})
