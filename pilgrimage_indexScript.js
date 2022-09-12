import {
  nextPage,
  prevPage
} from "./pageScrollEvent/pageScrollEvent.js";
import {
  fade,
  titleTextStyle
} from "./pilgrimage/pilgrimage-titleText-fadein/pilgrimage_pageOneText-anim.js";
import {
  scrollArrElemFadein
} from "./element-scroll-fadein/arrElment-scroll-fadein.js"
import {
  scrollElemFadein
} from "./element-scroll-fadein/element-scroll-fadein.js";
import {
  indiTextFade,
  indiTextStyle
} from "./pilgrimage/pilgrimage-indiText-fadein/pilgrimage_indiText-fadein.js";
import {
  scrollFunctionFadein
} from "./element-scroll-fadein/function-scroll-fadein.js";
import {
  pilgrimage_naviEvent
} from "./pilgrimage/pilgrimage_naviEvent/pilgrimage_navigation.js";
import {
  scrollValueEvent
} from "./pilgrimage/pilgrimageScrollValueEvent/pilgrimageScrollValueEvent.js";
import {
  
  pilgrimageRisingSlideNext,
  pilgrimageRisingSlidePrev
} from "./pilgrimage/pilgrimage_rising_parallaxSlide/pilgrimage_legacy_lastPage_parallaxSlide.js"

const main = document.getElementById('main');
const background = document.getElementById('background');
const pilgrimage_main = document.getElementById('pilgrimage_main');
const imageBox = document.getElementById('imageBox');
const imageDescription = document.getElementById('imageDescription');
const actorTextBox = document.getElementById('actorTextBox');
const pilgrimage_pageTwo = document.getElementById('pilgrimage_pageTwo');
const indiText = document.getElementById('indiText');
const newsText = document.getElementById('newsText');
const sectionOne = document.getElementById('sectionOne');
const sectionTwo = document.getElementById('sectionTwo');
const risingSectionOne = document.getElementById('risingSectionOne');
const risingSectionTwo = document.getElementById('risingSectionTwo');
const risingText = document.getElementById('risingText');
// const risingText = document.getElementById('risingText');

nextPage(main, 'wheel', pilgrimage_main)
nextPage(pilgrimage_main, 'wheel', actorTextBox)
// nextPage(indiText, 'wheel', newsText);
// nextPage(sectionOne, 'wheel', sectionTwo);
// nextPage(sectionTwo, 'wheel', risingText);
// nextPage(risingSectionOne, 'wheel', risingSectionTwo);

prevPage(pilgrimage_main, 'wheel', main);
// prevPage(sectionOne, 'wheel', indiText);
// prevPage(sectionTwo, 'wheel', sectionOne);
// prevPage(risingSectionOne, 'wheel', sectionTwo);
// prevPage(risingSectionTwo, 'wheel', risingSectionOne);



pilgrimageRisingSlidePrev('click');
pilgrimageRisingSlideNext('click');

pilgrimage_naviEvent('click');

// scrollValueEvent(background)
// scrollArrElemFadein(background,"",8);
// scrollElemFadein(background,"", imageBox,18);
// scrollElemFadein(background,"", imageDescription,30);

fade();
titleTextStyle('15rem', 1000, 'relative', 120, 0, '2vh');



const container = document.querySelectorAll('.container');
const containerArr = Array.from(container);
// console.log(containerArr);

let i = -1;

function indexCheck() {
  i++;
  if (i >= 9) {
    i = 9;
  }
  // console.log(i);
}

function indexCheckOpposite() {
  i--;
  if (i <= 0) {
    i = 0;
  }
  // console.log(i);
}

function boxVisible() {
  containerArr[i].style.opacity = 1;
  containerArr[i].style.transition = '0.5s';
}

function boxInVisible() {
  containerArr[i].style.opacity = 0;
  containerArr[i].style.transition = '0.5s';
}


let timer;

background.addEventListener('wheel', function (e) {
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      if (e.deltaY > 0) {
        indexCheck();

        // console.log(e.deltaY);
        // console.log(i);
        boxVisible(containerArr[i]);
      }
    }, 400);
  }
});

background.addEventListener('wheel', function (e) {
  if (timer) {
    timer = setTimeout(function () {
      timer = null;
      if (e.deltaY < 0) {

        indexCheckOpposite();
        // console.log(e.deltaY);
        // console.log(i);

        // boxInVisible(containerArr[i]);
      }
    }, 500);
  }
})
