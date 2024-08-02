
//image ke liye likha gya code 
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
      if (index >= slide.length) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = slide.length - 1;
      } else {
          currentIndex = index;
      }
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
  });

  prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
  });

  // Auto slide every 3 seconds
  setInterval(() => {
      showSlide(currentIndex + 1);
  }, 3000);
});
  
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

  