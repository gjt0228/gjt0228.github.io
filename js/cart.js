function showtime(){
    $('#sss').html(localStorage.getItem('price'))
   $('#boxbig').append($(`<ul data-v-c028c34c="" class="cart-item-head" id=''bigss>
   <li data-v-c028c34c="" id='nsss'>
   <img src="${localStorage.getItem('imgsrc')}" alt="">
   </li>
   <li data-v-c028c34c="" class="col-3">${localStorage.getItem('name')}</li>
   <li data-v-c028c34c="" class="col-1">${localStorage.getItem('price')}</li>
   <li data-v-c028c34c="" class="col-2">1</li>
   <li data-v-c028c34c="" class="col-1">${localStorage.getItem('price')}</li>
   <li data-v-c028c34c="" class="col-1">删除</li>
`))

}
showtime()
