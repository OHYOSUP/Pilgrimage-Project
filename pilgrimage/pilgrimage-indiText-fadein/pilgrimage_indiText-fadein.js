const indiText = document.getElementById('indiText');

const strText = indiText.textContent;



export function indiTextStyle(opacity, fontWeight, position, zIndex, left, top, color){

  // indiText.style.fontSize = fontSize;
  // indiText.style.opacity = opacity;
  indiText.style.fontWeight = fontWeight;
  indiText.style.position = position;
  indiText.style.zIndex = zIndex;
  indiText.style.left = left;
  indiText.style.top = top;
  indiText.style.color = color;
}


indiText.textContent = "";
const splitText = strText.split("");

for (let i = 0; i < splitText.length; i++) {
  indiText.innerHTML += "<span>" + splitText[i] + "</span>";
};

let char = 0;
let timer = setInterval(indiTextFade, 50)

export function indiTextFade() {
  const indiSpan = indiText.querySelectorAll('span')[char];
  indiSpan.classList.add('indiTextFade');
  char++
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  // timer = null;
}



// console.log(titleText);
// console.log(splitText);

// for (let i = 0; i < splitText.length; i++) {
//   titleText.innerHTML += "<span>" + splitText[i] + "</span>";
// };
// console.log(titleText);
// console.dir(titleText);
// let char = 0;
// let timer = setInterval(fade, 50)

// export function fade() {
//   const span = titleText.querySelectorAll('span')[char];
//   span.classList.add('fade');
//   char++;
//   if (char === splitText.length) {
//     complete();
//     return;
//   }
// }
// function complete() {
//   clearInterval(timer);
//   timer = null;
// }
