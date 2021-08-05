console.log("Responsive navbar !") ;

let openMenu=document.querySelector('.menu-open') ;
let closeMenu=document.querySelector('.menu-close') ;
let nav=document.querySelector('nav') ;
let scroll=document.querySelector('.scroll') ;

//animation for li items of the navbar
let liTab=document.querySelectorAll('li') ;
for(let i=0;i<=liTab.length-1;i++) {
    liTab[i].classList.add("animate__bounceIn")
}




openMenu.addEventListener('click',()=>{
    nav.classList.add('show') ;
    openMenu.style.display="none";
    setTimeout(()=>{
        nav.classList.remove('show') ;
    },2000) ;
    openMenu.style.display="block"
}) ;
closeMenu.addEventListener('click',()=>{
    nav.classList.remove('show') ;
    openMenu.style.display="block"
})


scroll.addEventListener('click',()=>{
   
        window.scrollTo({
            top:200,
            behavior:"smooth"
        })
    
})