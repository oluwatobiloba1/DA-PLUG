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






