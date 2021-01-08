 // 点击购买按钮
        // 获取用户输入的商品数量
        // 获取本页面的商品id
        // 获取本页面的商品价格
        // 获取本页面的商品名称
        // 获取本页面的商品图片    
//秒杀功能
 setInterval(sale,500)
 function sale(){
    var time= new Date();
    time.getHours();
    if(time.getHours()<10){
    $('.round').html('10:00 场')
    var h=9-time.getHours();
   if(h<10){$('.h11').html('0'+h)} 
   else{$('.h11').html(h)}
    }
    if(time.getHours()>=10){
    $('.round').html('22:00 场')
    var h=21-time.getHours();
   if(h<10){$('.h11').html('0'+h)} 
   else{$('.h11').html(h)}
    }
    var m=59-time.getMinutes();
   if(m<10){$('.f11').html('0'+m)} 
   else{$('.f11').html(m)};
   var f=59-time.getSeconds();
   if(f<10){$('.m11').html('0'+f)} 
   else{$('.m11').html(f)}
 }
 var x=0;
 function anmateleft(){ 
  
   x+=-200;
    $('.swiper-wrapper').css('transform','translate3d('+x+'px, 0px, 0px)');
    if(x<-2200){
      x=0;
    }
  }
   var time1= setInterval(anmateleft, 3000)
    
   $('.swiper-wrapper').hover(function(){
     console.log(1)
    clearInterval(time1)
},function(){
  console.log(1)
  setInterval(anmateleft, 3000)
})
// var answer = "";
// 开始完成需求
async function getData(){
    // 发送ajax请求，获取数据
    var data = await $.ajax({
        url:'./data.json',
        method:'get',
        data:{
            key:""
        },
        dataType:"json",
    })
    
   var cur= 25;
   var contentStr = ""   
   for(var i=0;i<=data.length-1;i++){
     var shop=data[i];
    
     if(i<cur){
       		contentStr+='<div class="item1"><a href="#"><div><img class="imgs" src="'+shop.pic+'">';
       	}else{
       		contentStr+='<div class="item1 hid"><a href="#"><div><img class="imgs" data-src="'+shop.pic+'">';
       	}
         
       	contentStr+="</div><h4 class='names'>"+shop.itemName+"</h4></a><p class='info'><span class='price1'><em>¥</em>"+shop.price+"</span><span class='sales1'>销量:"+shop.saleCnt+"</span></p></div>";
      
      

   }
//     var itemArr = content.children;//所用商品集合                                                                                                                                                                                                                                                                                                                                                                                                                                                           00                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    0000000000000000000 000000000000000000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
$('#content').html(contentStr);

$('#content').on('click','.item1',function(){
 
  localStorage.setItem('sale',$('.sales1').html());
  location.href = "./shop.html"
})
}
getData()
function getScroll(){
  return document.body.scrollTop+document.documentElement.scrollTop;
}

function windowHeight(){
  if (document.compatMode=="CSS1Compat") {
    return document.documentElement.clientHeight;
  }else{
    return document.body.clientHeight;
  }
}                                                 
