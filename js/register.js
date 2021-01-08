/*
	 要求：
	 	1 在输入手机号的过程中,失去焦点时监测你的手机号是否符合条件
		2 在输入密码的的过程中,实时监测你的密码是否符合条件
		3 当表单提交的时候,再次监测你的用户和密码是否符合条件,如果符合条件,就跳转页面,如果不符合,不能跳转页面
	 */
    $('#asd').css('display','none')
   
    $('#username').on('blur',checkUsername)
   
	//1 书写监测用户名的函数
         function checkUsername(){
        //测试用户名的正则
        $('#asd').css('display','block')
		var reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
		//获取的输入的用户名
	
		if(reg.test($('#username').val())){
			//如果输入的用户名符合正则,正确
            $('#asd').html("可以注册") ;
            $('#asd').css('color','green')
			return true;
		}else{
			//如果输入的用户名不符合正则,错误
            $('#asd').html('请输入正确的手机号码') ; 
            $('#asd').css('color','red')
			return false;
		}
	}

	//2 书写监测密码的函数
	// function checkPassword(){
	// 	//测试密码的正则
		var reg = /^[\w~!@#]{8,12}$/;
	// 	//获取输入的密码
	// 	var password = document.querySelector('#password').value;
	// 	if(reg.test(password)){
	// 		//如果输入的密码符合正则,正确
	// 		spanArr[1].innerHTML = "密码可以使用";
	// 		return true;
	// 	}else{
	// 		//如果输入的用户名不符合正则,错误
	// 		spanArr[1].innerHTML = '密码必须是8-12的字母,数字或者特殊符号';
	// 		return false;
	// 	}

    // }
    $('#asb').css('display','none')
    $('#userpw').on('input',checkPassword)
	//2 书写监测密码强度的函数
	function checkPassword(){
        $('#asb').css('display','block')
        $('#asb').css('color','red')
		/* 
			定义一个高强度密码的标准
				1 8到12位:/^[\w~!@#$%^&*]{8,12}$/
				2 有数字
				3 有大写字母
				4 有小写字母
				5 有特殊符号
			定义一个低强度密码的标准
				密码必须是8-12的字母,数字或者特殊符号:/^[\w~!@#$%^&*]{8,12}$/
		*/
		//获取输入的密码
		var password = document.querySelector('#userpw').value;
		//监测密码
		if(/^[\w~!@#]{8,12}$/.test(password)&&/\d+/.test(password)&&/[A-Z]+/.test(password)&&/[a-z]+/.test(password)&&/[~!@#]+/.test(password)){
            $('#asb').css('color','green')
            $('#asb').html('密码强度高') ; 
			return true
		}
		if(/^[\w~!@#]{8,12}$/.test(password)){
            $('#asb').css('color','green')
            $('#asb').html('密码强度低') ; 
			return true
		}else{
            $('#asb').css('color','red')
			$('#asb').html( '密码必须是8-12的字母,数字或者特殊符号') ; 
			return false;
		}		

	}
	
	 $("#login-button").on('click',function(){
       
        if(checkUsername()&&checkPassword()){
            $.ajax({
                url:"./api/register.json",
                data:{
                    un:$('#username').val(),
                    pw:$('#userpw').val()
                },
                dataType:'json',
                success:function(res){
                    if(res.code==1){
                        // 注册成功，信息添加到本地存储，方便同域名下的其他页面访问
                       
                        location.href = "./login.html"
                    }
                }
            })
        }
        else{
            alert("请重新检查输入")
        }
     })