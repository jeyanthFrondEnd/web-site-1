var open = document.getElementById('open');
var close = document.getElementById('close');
var body = document.getElementById('body');
close.style.display = 'none';
open.addEventListener('click',()=>{
   close.style.display='block';
   open.style.display='none';
   body.style.display='block';
})
close.addEventListener('click',()=>{
    close.style.display='none';
    open.style.display='block';
    body.style.display='none'
 })
