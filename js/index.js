define(["nav_exposed","getList","login_register"],function(nav_ex,getList,login_register){
    new nav_ex();
    new getList("http://localhost/tonlion-1/lib/list1.json",".pane");
    new login_register();


    
$(function(){
    //注册
        $(".btn-register").on("click",function(){
            var username=$(".text_name_reg").val();
            var password=$(".text_pwd_reg").val();
            // console.log(username,password);
            var opt = {
                url:"http://localhost/tonlion-1/php/user.php",
                type:"POST",
                data:{username:username,password:password,type:"register"}
            }
            $.ajax(opt)
            .then(function(res){
            console.log(res);
                if(res == "1"){
                    alert("注册成功！即将为您跳转到首页");
                    location.href="index.html";
                    
                }else{
                    alert("用户名重名，注册失败！");
                    
                }
            })
        })
    //登录
        $(".btn-login").on("click",function(){
            // var username=document.getElementsByClassName("text_name_reg")[0];
            // console.log(username.value);
            var username=$(".text_name_log").val();
            var password=$(".text_pwd_log").val();
            console.log(username,password);
            var opt={
                url:"http://localhost/tonlion-1/php/user.php",
                type:"POST",
                data:{username:username,password:password,type:"login"}
            }
            $.ajax(opt)
            .then(function(res){
                console.log(res);
                if(res=="0"){
                    alert("登录失败");
                
                }else{
                    alert("登录成功！即将为您跳转到首页");
                    location.href="index.html";
                }
            })
        })
    })

  
    

});


