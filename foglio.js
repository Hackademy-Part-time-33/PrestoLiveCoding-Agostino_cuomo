/* NAVBAR SCROLL */
let navbar = document.querySelector('.Navbar-scroll');

console.log('ciao');
window.addEventListener('scroll', ()=>{
    if( window.scrollY>0 ){
    navbar.classList.add('scroll');
    }
} );

/* PARTE CONTATORE NUMERI */
let firstNumber= document.querySelector('#firstNumber');
let secondNumber= document.querySelector('#secondNumber');
let thirdNumber= document.querySelector('#thirdNumber');
let count1 =0; let count2 =0; let count3=0;

let loop1 = setInterval(()=>{
    if(count1 < 2340){
    count1++;
firstNumber.innerHTML=count1;
  
    }
},70);

let loop2 = setInterval(()=>{
    if(count2 < 1230){
    count2++;
secondNumber.innerHTML=count2;
 
    }
},70);

let loop3 = setInterval(()=>{
    if(count3 < 650){
    count3++;
thirdNumber.innerHTML=count3;
    
    }
},70);