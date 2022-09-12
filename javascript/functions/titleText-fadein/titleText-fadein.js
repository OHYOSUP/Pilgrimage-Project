const titleText = document.getElementById('titleText')
const strText = titleText.textContent;

// titleText.style.opacity = 0;

titleText.textContent = "";
const splitText = strText.split("");

for (let i = 0; i < splitText.length; i++) {
  titleText.innerHTML += "<span>" + splitText[i] + "</span>";
};

let char = 0;
let timer = setInterval(fadein, 250)

function fadein() {
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



// span {
//   opacity: 0;
// }

// span.fade {
//   opacity: 1;
//   transition: 0.7s ease;
//   transform: translateX(50px);
//   color: #BA3737;
// }