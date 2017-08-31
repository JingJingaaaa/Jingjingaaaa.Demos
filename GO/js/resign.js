//跳转登陆页面
    var codeBox=document.getElementById("codeBox");
    var login=document.getElementById("login");
    login.onclick=function(){
        window.location.href="login.html"
    };
//返回上一个页面
    var back_icon=document.querySelector("#back");
    back_icon.onclick= function(){
        window.history.back();
    };
    //获取验证码
    getCode();
    function getCode(){
        code="";
        var arr=['1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','o','p','q','r','s','t',
            'u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R','S','T',
            'U','V','W','X','Y','Z'  ]
        var len=arr.length,index=0;
        for(var i=0;i<4;i++){
            index=parseInt(Math.random()*len);
            code+=arr[index];
        }
        codeBox.innerHTML=code;

    }
//表单验证
    var btnLogin=document.getElementById("btnLogin");//注册按钮
    var tel=document.getElementById("tel");
    var password=document.getElementById("password");
    var testcode=document.getElementById("testcode");
    btnLogin.onclick=function(e){
        e.preventDefault();
        if(tel.value===""||tel.validity.patternMismatch){
            tel.setCustomValidity("请输入手机号");
        }else{
            tel.setCustomValidity("");
        }
        if(testcode.value===""){
            testcode.setCustomValidity("请输入验证码");
        }else if(testcode.value.toLowerCase()!==code.toLowerCase()){
                testcode.setCustomValidity("验证码错误");
            }else{
                testcode.setCustomValidity("");
            }
        setCookie("tel",tel.value,7);
        setCookie("password",password.value,7);
        window.location.href="home_page.html"
    };





