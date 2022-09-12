function prevPage(currentPage, eventType, targetPage) {
  currentPage.addEventListener(eventType, (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      targetPage.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }
  });
}