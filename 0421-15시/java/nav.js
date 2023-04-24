// --------로고클릭시 index파일로 이동---
document.addEventListener('DOMContentLoaded', () => {
    const blindElement = document.querySelector('.homeIdex');
    if (blindElement) {
        blindElement.addEventListener('click', () => {
            window.location.href = '/index.html';
        });
    }
});
// ------네비게이션 -----------

// const와 let을 사용하여 호버 이벤트 리스너를 추가하고, 해당 id의 box_dep3을 보여줍니다.
for (let i = 1; i <= 6; i++) {
    const menuId = `pcMenuList${i}`;
    const menuElement = document.getElementById(menuId);

    menuElement.addEventListener("mouseover", (event) => {
      const boxDep3Element = event.currentTarget.querySelector(".box_dep3");
      boxDep3Element.classList.add("on");
    });
    menuElement.addEventListener("mouseout", (event) => {
      const boxDep3Element = event.currentTarget.querySelector(".box_dep3");
      boxDep3Element.classList.remove("on");
    });
  }

  // -------색상 랜덤으로 변하는 배너---

    // // 배경색 변화를 위한 JavaScript 코드
    // const banner = document.getElementById('topBannerWrap');

    // // 배경색을 무작위로 생성하는 함수
    // function getRandomColor() {
    //     const letters = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    // // 페이지 로드 시 배경색 변경
    // window.onload = () => {
    //     banner.style.backgroundColor = getRandomColor();
    // };

    // // 페이지 새로고침할 때마다 배경색 변경
    // window.onbeforeunload = () => {
    //     banner.style.backgroundColor = getRandomColor();
    // }
  

        // 배경색을 무작위로 생성하는 함수 (#세자리수 형식)
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

// ---------------------배너 닫기-------------
const xBox = document.querySelector('.box_btn .xBox');
const boxBtn = document.querySelector('.box_gnb_banner');
const allWrap = document.getElementById('wrap');

xBox.addEventListener('click', function() {
   
    boxBtn.style.display = 'none';
    allWrap.classList.add('scrolled');
    allWrap.style.marginTop = '80px'; // 'scroll' 클래스가 추가되면 'margin-top' 값을 변경
});



// ---------스크롤시 헤더 줄이기------
// $(window).scroll(function(){
//     if($(document).scrollTop() > 0) {
//         $('.header').addClass('scrolled');
//     } else {
//         $('.header').removeClass('scrolled');
//     }
// });

const getCurrentScroll = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
};

const header = document.getElementById('header');
const topBanner = document.getElementById('topBannerWrapCms');
const navIcon = document.getElementById('navIcon');
const wrap = document.getElementById('wrap');



window.addEventListener('scroll', () => {
    if (getCurrentScroll() > 0) {
        header.classList.add('scrolled');
        topBanner.classList.add('scrolled');
        navIcon.classList.add('scrolled');
     

        
    } else {
        header.classList.remove('scrolled');
        topBanner.classList.remove('scrolled');
        navIcon.classList.remove('scrolled');
      
    }
});
