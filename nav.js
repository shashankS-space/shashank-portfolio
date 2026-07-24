const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu a');

menuBtn.addEventListener('click', ()=>{
  mobileMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

menuLinks.forEach((link)=>{
  link.addEventListener('click', ()=>{
    mobileMenu.classList.remove('active');
    menuBtn.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});