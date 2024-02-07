console.log("hellow ");
let favouriteNumber = 3;
console.log(favouriteNumber);

window.addEventListener('scroll', function() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 100) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });