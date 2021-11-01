const burgerButton = document.querySelector('.burger-button');

burgerButton.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
});




const navLinks= document.querySelectorAll('.nav-links');

navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    });
});

const fav = ["gaming","art","sport"]
document.querySelector('fanof');
let Floater = document.querySelector('.float-text');
const hello = "hello world";
let paddedWord ="";

    for (let i=0; i<hello.length; i++){
        setTimeout(()=>{
            Floater.innerHTML +=hello.charAt(i);
            console.log(Floater.innerHTML);
        },1000)
        
    }



//setTimeout(()=>{
//   
//   Floater.innerHTML = " ";
//,1000)

