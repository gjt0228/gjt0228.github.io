$('#login-button').click(function(){
    $.ajax({
        url:"./api/login.json",
        data:{
            un:$('#username').val(),
            pw:$('#userpw').val()
        },
        dataType:"json",
        success:function(res){
            if(res.code==1){
                console.log(1)
                // 登录成功，信息添加到本地存储，方便同域名下的其他页面访问
                localStorage.setItem('name',$('#username').val());
                location.href = "./cart.html"
            }
        }
    })
})