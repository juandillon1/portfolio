const subtitle = new Typed('#helloworld', {
    strings: ['Bienvenido', 'a', 'mi portfolio'],
    typeSpeed: 50,
    loop: true
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.dropdown-menu');
    const arrow = document.querySelector('.arrow');
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('open');
      arrow.classList.toggle('open');
    });
});
  