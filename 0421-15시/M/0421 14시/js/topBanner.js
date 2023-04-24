function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const boxes = document.getElementsByClassName('box_info');
const randomBoxIndex = Math.floor(Math.random() * boxes.length);
const randomBox = boxes[randomBoxIndex];

const randomLink = 'https://www.example.com/' + randomBox.id; // id를 링크 주소로 사용
randomBox.href = randomLink;

// // 모든 띠배너의 active 클래스 제거
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].classList.remove('active');
// }

// 랜덤 띠배너에 active 클래스 추가
randomBox.classList.add('active');

// 배경색 무작위로 설정
const randomColor = getRandomColor();
document.getElementById('topBannerWrap').style.backgroundColor = randomColor;

// // ---------------------배너 닫기-------------
// const xBox = document.querySelector('.xBox');
// const boxBtn = document.querySelector('.tob_banner_wrap');
// const mobileBtn =document.querySelector('mobile_btn');

// xBox.addEventListener('click', function() {
//     boxBtn.style.display = 'none';
//     mobileBtn.style.top = `${boxBtn.clientHeight}px`;
// });

// // ------------------------------------------
// const xBox = document.querySelector('.xBox');
// const boxBtn = document.querySelector('.tob_banner_wrap');
// const mobileBtn = document.querySelector('.mobile_btn');

// xBox.addEventListener('click', function() {
//   if (boxBtn.style.display !== 'none') {  // boxBtn이 보이는 상태에서 클릭했을 때
   
//     mobileBtn.classList.add('up');
//   } else {  // boxBtn이 사라진 상태에서 클릭했을 때

//     mobileBtn.classList.remove('up');
//   }
// });
const xBox = document.querySelector('.xBox');
const boxBtn = document.querySelector('.tob_banner_wrap');
const hamburger = document.querySelector('.hamburgerBtn');

xBox.addEventListener('click', function() {
  if (boxBtn.style.display !== 'none') {  // boxBtn이 보이는 상태에서 클릭했을 때
    boxBtn.style.display = 'none';
    hamburger.style.top = `${boxBtn.clientHeight}px`;
    hamburger.classList.add('up');
  } else {  // boxBtn이 사라진 상태에서 클릭했을 때
    boxBtn.style.display = 'block';
    hamburger.style.top = 0;
    hamburger.classList.remove('up');
  }
});