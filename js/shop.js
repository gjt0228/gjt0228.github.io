$('#cart').on('click',function(){
    location.href = "./cart.html"
})
function showtime(){
    $('#imgsrc').attr('src',localStorage.getItem('imgsrc'))
    $('#names').html(localStorage.getItem('name'))
    $('#price').html(localStorage.getItem('price'))
    $('#imgsrc').attr('src',localStorage.getItem('imgsrc'))
    $('#price1').html(localStorage.getItem('price'))
}
showtime()