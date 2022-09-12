const titleText = document.getElementById('titleText')

const strText = titleText.textContent;



export function titleTextStyle(fontSize, opacity, leftValue, topValue, color, fontWeight){

  titleText.style.position = 'relative';
  titleText.style.zIndex = 10;
  titleText.style.fontSize = fontSize;
  titleText.style.opacity = opacity;
  titleText.style.left = leftValue
  titleText.style.top = topValue
  titleText.style.color = color
  titleText.style.fontWeight = fontWeight
}


titleText.textContent = "";
const splitText = strText.split("");

for (let i = 0; i < splitText.length; i++) {
  titleText.innerHTML += "<span>" + splitText[i] + "</span>";
};

let char = 0;
let timer = setInterval(fade, 50)

export function fade() {
  const span = titleText.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
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
