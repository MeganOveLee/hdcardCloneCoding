const burger = document.querySelectorAll('.menu-trigger');
let h = 0;

burger.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    if (h === 0) {
      document.querySelector('.ham-con').animate({
        right: '0',
        opacity: 1
      }, 500);
      item.classList.add('active-1');
      h++;
    } else if (h === 1) {
      document.querySelector('.ham-con').animate({
        right: '-20%',
        opacity: 0
      }, 500);
      item.classList.remove('active-1');
      h--;
    }
    
  });
});

window.addEventListener('scroll', () => {
    const sct = window.pageYOffset;
    if (sct > 30) {
      document.querySelector('.ham-con').style.opacity = '0';
      document.querySelector('.ham-con').style.right = '-20%';
      burger.forEach((item) => {
        item.classList.remove('active-1');
      });
      h = 0;
    }
  });

// window.addEventListener('scroll', () => {
//     const sct = window.pageYOffset;
//     if (sct > 30) {
//       document.querySelector('.ham-con').style.opacity = '0';
//       document.querySelector('.ham-con').style.right = '-20%';
//       item.classList.remove('active-1');
//       h = 0;
//     }
//   });

