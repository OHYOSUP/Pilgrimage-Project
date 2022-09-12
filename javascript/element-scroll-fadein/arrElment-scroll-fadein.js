const actorTextBox = document.querySelectorAll('#actorTextBox>div>span');
const imageBox = document.getElementById('imageBox');
const imageDescription = document.getElementById('imageDescription');
let posY = 0;
let i = 0;

// console.log(actorTextBox);
const nameArr = Array.from(actorTextBox);



function scrollDownEvent() {
  window.scrollBy({
    top: 400,
    left: 0,
    behavior: 'smooth'
  });
  posY++;
  // console.log(posY);
}

function scrollUpEvent() {
  window.scrollBy({
    top: -400,
    left: 0,
    behavior: 'smooth'
  });
  posY--;
  // console.log(posY);
}




export const scrollArrElemFadein = function scrollElement(pageName, elem, yValue) {
  pageName.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
      scrollDownEvent();
      if (posY >= 150) {
        posY = 150;
      }
    }
    if (e.deltaY < 0) {
      scrollUpEvent();
      if (posY <= 0) {
        posY = 0;
      }
    }

    if (posY >= yValue) {
      nameArr.forEach(elem => {
        elem.style.opacity = 1;
        elem.style.transition = '0.5s';
      });
    }
  });
}
