var accordionHeaders = document.querySelectorAll('.item__header');

accordionHeaders.forEach(itemClicked => {
  itemClicked.addEventListener('click', () => {
    itemClicked.classList.toggle('active')
  })
});
