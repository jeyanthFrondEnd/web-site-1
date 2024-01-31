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

//  slider

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.querySelectorAll(".slide_gurad-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);
}