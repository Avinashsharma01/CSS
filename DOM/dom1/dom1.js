//Zero 
let a=document.querySelector('h1');
a.style.color='blue';

a.addEventListener('click', function(){
    a.style.backgroundColor='black';
    a.style.color='white';
    a.style.display='inline';
})


//One 
let b=document.querySelector('#bulb')
let btn=document.querySelector('button')

let fleg=0
btn.addEventListener('click', function(){
   if(fleg==0){
    b.style.backgroundColor='yellow'
    btn.innerHTML='OFF'
    fleg=1
   }
   else{
    b.style.backgroundColor='white'
    btn.innerHTML='ON'
    fleg=0
   }
})

//Two
let avi=document.querySelectorAll('h1')
avi.forEach(function(a){
    console.log(a)
})

