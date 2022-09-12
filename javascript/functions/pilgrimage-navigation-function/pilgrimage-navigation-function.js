const main = document.getElementById('main');
const nav = document.querySelector('nav');


console.log(nav);
let positionY = 0;




main.addEventListener('wheel', (e)=>{
  e.preventDefault()
  if(e.deltaY > 0){
    scrollBy({top: 840, left: 0, behavior :'smooth'});
    nav.style.opacity = 1;
    nav.style.transition = '1s';
  }
})



