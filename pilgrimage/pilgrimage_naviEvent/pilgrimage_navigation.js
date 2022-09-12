export function pilgrimage_naviEvent (eventType){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener(eventType, function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  })
}


