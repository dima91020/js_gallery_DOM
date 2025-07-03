'use strict';

const galeryList = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

// eslint-disable-next-line
galeryList.addEventListener('click', (event) => {
  event.preventDefault();

  const listItemLink = event.target.closest('.list-item__link');

  if (!listItemLink) {
    return;
  }

  mainImage.src = listItemLink.href;
});
