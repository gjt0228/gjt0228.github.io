<?php

/* 
    后端
        ==> 接收到前端传递来的用户名和密码
        ==> 把用户名和密码在数据库里面查询
        ==> 把查询成功或者失败的信息发送给前端(json)
*/
// 1 接收到前端传递来的用户名和密码
$un = $_POST['un'];
$pw = $_POST['pw'];

// 2 把用户名和密码在数据库里面查询,省略

// 3 把查询成功信息发送给前端
$result = array('code'=>1);
echo json_encode($result );

// 当登录成功以后给浏览器写入cookie
setcookie('un',$un,time()+60*60);
?>