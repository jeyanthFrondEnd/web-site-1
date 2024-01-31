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
 function power(){
   var anchor = document.getElementById('anchorOne');
   var anchorOne = document.getElementById('anchorTwo');
   var anchorTwo = document.getElementById('anchorThree');
   var para = document.getElementById('paragraph');
   var paraOne = document.getElementById('paragraph1');
   var paraTwo = document.getElementById('paragraph2');

   paraOne.style.display='none'
   paraTwo.style.display='none'
   anchor.addEventListener('click',()=>{
   para.style.display='block'
   paraOne.style.display='none'
   paraTwo.style.display='none'
   })
   anchorOne.addEventListener('click',()=>{
      para.style.display='none';
      paraOne.style.display='block';
      paraTwo.style.display='none';
      })
      anchorTwo.addEventListener('click',()=>{
         para.style.display='none'
         paraOne.style.display='none'
         paraTwo.style.display='block'
         })
 }
 power()

 var indicator = document.querySelector('.indicator');
 var menus = document.querySelectorAll('.anchorOne')

menus.forEach((tap,index)=>{
   tap.addEventListener('click', function(){
      indicator.style.left=`${index * 32}%`;
   })
})
