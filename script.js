const burgerButton = document.querySelector('.burger-button');

burgerButton.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
});
const circle2 = document.querySelector('.circle-2');

const circle1 = document.querySelector('.circle-1');


setInterval(()=>{
    circle2.style.transform = "scale(1.0857)";
},500);
setInterval(()=>{
    circle2.style.transform = "scale(1)";
},800);
setInterval(()=>{
    circle1.style.transform = "scale(1.1)";
},600);
setInterval(()=>{
    circle1.style.transform = "scale(1)";
},800);

const navLinks= document.querySelectorAll('.nav-links');

navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    });
});

 

/*var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
window.addEventListener('scroll', function (event) {
	if (isInViewport(skills)) {
        
	}
}, false);*/
