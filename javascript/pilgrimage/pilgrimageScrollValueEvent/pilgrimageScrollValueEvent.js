let posY = 0;
let i = 0;

function scrollDownEvent() {
  window.scrollBy({
    top: 600,
    left: 0,
    behavior: 'smooth'
  });
  posY++;
  // console.log(posY);
}

function scrollUpEvent() {
  window.scrollBy({
    top: -600,
    left: 0,
    behavior: 'smooth'
  });
  posY--;
  // console.log(posY);
}

export function scrollValueEvent(pageName) {
  pageName.addEventListener('wheel', (e) => {
    // e.preventDefault();s

    if (e.deltaY > 0) {
      scrollDownEvent();
      if (posY >= 150) {
        posY = 150;
      }
      // console.log(posY);
    }
    if (e.deltaY < 0) {
      scrollUpEvent();
      if (posY <= 0) {
        posY = 0;
      }
    }

    // elem = targetElem

    // if (posY >= yValue) {
    //   elem.style.opacity = 1;
    //   elem.style.transition = '0.5s';
    // }
  });
}