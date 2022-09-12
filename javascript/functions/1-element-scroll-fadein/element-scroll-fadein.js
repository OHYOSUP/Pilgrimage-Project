const root = document.getElementById('root');
const span = document.querySelector('span');
const box = document.querySelectorAll('#root>div');

// console.log(box);


span.style.position = 'fixed';
// console.log(span);



let posY = 0;
let i = 0;

span.textContent = window.scrollY;




root.addEventListener('wheel', (e)=>{
  e.preventDefault();
  span.textContent = posY;

  if(window.scrollY <= 0){
    posY = 0;
    if(window.scrollY >= 30){
      posY = 30;
    }
  }

  if(e.deltaY > 0){
    window.scrollBy({top : 200, left : 0, behavior : 'smooth'});
    posY++;  

    if(posY >= 5){
      box[0].style.opacity = 1;
      box[0].style.transition = '0.5s';
    }
    if(posY >= 12){
      box[1].style.opacity = 1;
      box[1].style.transition = '0.5s';
    }
    if(posY >= 20){
      box[2].style.opacity = 1;
      box[2].style.transition = '0.5s';
    }
    if(posY >= 29){
      box[3].style.opacity = 1;
      box[3].style.transition = '0.5s';
    }
    console.log(posY);
  }
  if(e.deltaY < 0){
    window.scrollBy({top : -200, left : 0, behavior : 'smooth'});
    posY--;  


    if(posY <= 5){
      box[0].style.opacity = 0;
      box[0].style.transition = '0.5s';
    }
    if(posY <= 15){
      box[1].style.opacity = 0;
      box[1].style.transition = '0.5s';
    }
    if(posY <= 25){
      box[2].style.opacity = 0;
      box[2].style.transition = '0.5s';
    }
    if(posY <= 35){
      box[3].style.opacity = 0;
      box[3].style.transition = '0.5s';
    }
    console.log(posY);
  }
  // console.log(window.scrollY);


  // if(window.scrollY >= 100){
  //   box[2].style.opacity = 1;
  //   box[2].style.transition = '0.5s';
  // }
  
});

