const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navMenu');
  const navLinks = document.querySelectorAll('.navMenu li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navActive');
    console.log(nav.classList);

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.2}s`;
      }
    });
  });
  console.log('I\'m working!');
};

navSlide();
