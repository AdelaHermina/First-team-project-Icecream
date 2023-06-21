var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  function myFunction() {
    var dots = document.getElementById('dots');
    var moreText = document.getElementById('more');
    var btnText = document.getElementById('myBtn');
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
    }
  }
}

(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open="modal1"]'),
    openModalBtn2: document.querySelector('[data-modal-open="modal2"]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal--hidden');
  }
})();

/* modal about */

function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');
  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

/* modals corneliu*/

(() => {
  function initModal(id) {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open='" + id + "']"),
      closeModalBtn: document.querySelector("[data-modal-close='" + id + "']"),
      modal: document.querySelector("[data-modal='" + id + "']"),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  }
  initModal(1);
  initModal(2);
  initModal(3);
})();

/* modal products */
var modal1 = document.getElementById('cream-modal');
var modal2 = document.getElementById('coffee-modal');
var modal3 = document.getElementById('milk-modal');
// Get the button that opens the modal
var btn1 = document.getElementById('creambtn');
var btn2 = document.getElementById('coffeebtn');
var btn3 = document.getElementById('milkbtn');
// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal1.style.display = 'block';
};
btn2.onclick = function () {
  modal2.style.display = 'block';
};
btn3.onclick = function () {
  modal3.style.display = 'block';
};
