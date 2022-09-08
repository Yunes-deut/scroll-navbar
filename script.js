let navbarEL=document.querySelector('.header');
let paragraphEl=document.querySelector('.paragraph');

this.addEventListener('scroll',()=>{
  if(this.scrollY>=(paragraphEl.offsetTop)-2*(navbarEL.offsetHeight))
  {
     navbarEL.classList.add("active")
  }
  else{
     navbarEL.classList.remove("active");
      }
})