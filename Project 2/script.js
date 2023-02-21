'use strict';
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');
//Show Modal

const showModalWindow = function () {
  console.log('Click');
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Close Modal
const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};
//vv
for (const element of btnsShowModalWindow) {
  element.addEventListener('click', showModalWindow);
}
btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});
