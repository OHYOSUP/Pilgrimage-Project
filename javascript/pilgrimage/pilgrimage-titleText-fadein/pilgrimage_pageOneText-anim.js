const titleText = document.getElementById('titleText')

const strText = titleText.textContent;



export function titleTextStyle(fontSize, fontWeight, position, zIndex, left, top, color){

  titleText.style.fontSize = fontSize;
  
  titleText.style.fontWeight = fontWeight;
  titleText.style.position = position;
  titleText.style.zIndex = zIndex;
  titleText.style.left = left;
  titleText.style.top = top;
  titleText.style.color = color;
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
