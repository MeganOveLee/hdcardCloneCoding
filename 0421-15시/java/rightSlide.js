































// ------------------------------------------------right Banner---

const rightSlide = document.querySelector(".rightslide");
let rightSlideWidth = rightSlide.clientWidth;


const rightSlideItems = document.querySelectorAll(".rightslide_item");

const rightmaxSlide = rightSlideItems.length;


let currtSlide = 1;


const rightPagination = document.querySelector(".rightslide_pagination");

for(let i = 0; i < rightmaxSlide; i++){
    if(i === 0)rightPagination.innerHTML += `<li class="active">ㆍ</li>`;
    else rightPagination.innerHTML += `<li>ㆍ</li>`;
}

const rightPaginationItems = document.querySelectorAll(".rightslide_pagination > li");
rightPaginationItems.forEach(item => {
    
});



window.addEventListener("resize", () => {
    rightSlideWidth = slide.clientWidth;
});

for (let i = 0; i < rightmaxSlide; i++){

    rightPaginationItems[i].addEventListener("click", () =>{

        currtSlide = i + 1;

        const offset = rightSlideWidth * (currtSlide - 1);

        rightSlideItems.forEach((i) => {
            i.setAttribute("style", `left:${-offset}px`);
        });

        rightPaginationItems.forEach((i) =>i.classList.remove("active"));
        rightPaginationItems[currtSlide - 1].classList.add("active");
    });
}



// // ------------------------------------------------right Banner---
// 똥망진창 자동슬라이드
// const rightSlide = document.querySelector(".rightslide");
// let rightSlideWidth = rightSlide.clientWidth;


// const rightSlideItems = document.querySelectorAll(".rightslide_item");

// const rightmaxSlide = rightSlideItems.length;


// let currtSlide = 1;


// const rightPagination = document.querySelector(".rightslide_pagination");

// for(let i = 0; i < rightmaxSlide; i++){
//     if(i === 0)rightPagination.innerHTML += `<li class="active">ㆍ</li>`;
//     else rightPagination.innerHTML += `<li>ㆍ</li>`;
// }

// const rightSlidePagination = document.querySelectorAll(".rightslide_pagination > li");
// rightSlidePagination.forEach(item => {
    
// });
// // -------------------------------------------

// // 무한 슬라이드를 위해 first, last 슬라이드 복사하기
// const firstSlide = rightSlideItems[0];
// const lastSlide = rightSlideItems[rightSlideItems.length - 1];
// const firstElem = document.createElement("div");
// const lastElem = document.createElement("div");

// lastSlide.classList.forEach((c) => lastElem.classList.add(c));
// lastElem.innerHTML = lastSlide.innerHTML;

// firstSlide.classList.forEach((c) => firstElem.classList.add(c));
// firstElem.innerHTML = firstSlide.innerHTML;

// // 각 복제한 엘리먼트 추가하기
// rightSlideItems[0].before(lastElem);
// rightSlideItems[rightSlideItems.length - 1].after(firstElem);

// rightSlideItems = document.querySelectorAll(".swiper-wrapper");
// //
// let offSet = rightSlideWidth + currtSlide;
// rightSlideItems.forEach((i) => {
//   i.setAttribute("style", `left: ${-offSet}px`);
// });


// function nextMove() {
//   currtSlide++;
//   // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
//   if (currtSlide <= rightmaxSlide) {
//     // 슬라이드를 이동시키기 위한 offSet 계산
//     const offSet = rightSlideWidth * currSlide;
//     // 각 슬라이드 아이템의 left에 offSet 적용
//     rightSlideItems.forEach((i) => {
//       i.setAttribute("style", `left: ${-offSet}px`);
//     });
//     // 슬라이드 이동 시 현재 활성화된 pagination 변경
//     rightSlideItems.forEach((i) => i.classList.remove("active"));
//     rightSlideItems[currSlide - 1].classList.add("active");
//   } else {
//     // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
//     currSlide = 0;
//     let offSet = rightSlideWidth * currSlide;
//     rightSlideItems.forEach((i) => {
//       i.setAttribute("style", `transition: ${0}s; left: ${-offSet}px`);
//     });
//     currSlide++;
//     offSet = rightSlideWidth * currSlide;
//     // 각 슬라이드 아이템의 left에 offSet 적용
//     setTimeout(() => {
//       // 각 슬라이드 아이템의 left에 offSet 적용
//       rightSlideItems.forEach((i) => {
//         // i.setAttribute("style", `transition: ${0}s; left: ${-offSet}px`);
//         i.setAttribute("style", `transition: ${0.15}s; left: ${-offSet}px`);
//       });
//     }, 0);
//     // // 슬라이드 이동 시 현재 활성화된 pagination 변경
//     rightSlideItems.forEach((i) => i.classList.remove("active"));
//     rightSlideItems[currSlide - 1].classList.add("active");
//   }
// }


// function prevMove() {
//     currtSlide--;
//     // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
//     if (currtSlide > 0) {
//       // 슬라이드를 이동시키기 위한 offset 계산
//       const offSet = rightSlideWidth * currtSlide;
//       // 각 슬라이드 아이템의 left에 offSet 적용
//       rightSlideItems.forEach((i) => {
//         i.setAttribute("style", `left: ${-offSet}px`);
//       });
//       // 슬라이드 이동 시 현재 활성화된 pagination 변경
//       rightSlideItems.forEach((i) => i.classList.remove("active"));
//       rightSlideItems[currtSlide - 1].classList.add("active");
//     } else {
//       // 무한 슬라이드 기능 - currtSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
//       currtSlide = rightmaxSlide + 1;
//       let offSet = rightSlideWidth * currtSlide;
//       // 각 슬라이드 아이템의 left에 offSet 적용
//       rightSlideItems.forEach((i) => {
//         i.setAttribute("style", `transition: ${0}s; left: ${-offSet}px`);
//       });

//       currtSlide--;
//       offSet = rightSlideWidth * currtSlide;
//       setTimeout(() => {
//         // 각 슬라이드 아이템의 left에 offSet 적용
//         rightSlideItems.forEach((i) => {
//           // i.setAttribute("style", `transition: ${0}s; left: ${-offSet}px`);
//           i.setAttribute("style", `transition: ${0.15}s; left: ${-offSet}px`);
//         });
//       }, 0);
//       // 슬라이드 이동 시 현재 활성화된 pagination 변경
//       rightSlideItems.forEach((i) => i.classList.remove("active"));
//       rightSlideItems[currtSlide - 1].classList.add("active");
//     }
//   }


// // ------------------------------------------


// window.addEventListener("resize", () => {
//     rightSlideWidth = slide.clientWidth;
// });

// for (let i = 0; i < rightmaxSlide; i++){

//     rightSlideItems[i].addEventListener("click", () =>{

//         currtSlide = i + 1;

//         const offSet = rightSlideWidth * (currtSlide - 1);

//         rightSlideItems.forEach((i) => {
//             i.setAttribute("style", `left:${-offSet}px`);
//         });

//         rightSlideItems.forEach((i) =>i.classList.remove("active"));
//         rightSlideItems[currtSlide - 1].classList.add("active");
//     });
// }
// // ----------------------------

// // 기본적으로 슬라이드 루프 시작하기
// let loopIntervalR = setInterval(() => {
//   nextMove();
// }, 2000);

// // 슬라이드에 마우스가 올라간 경우 루프 멈추기
// rightSlide.addEventListener("mouseover", () => {
//   clearInterval(loopIntervalR);
// });

// // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
// rightSlide.addEventListener("mouseout", () => {
//   loopIntervalR = setInterval(() => {
//     nextMove();
//   }, 2000);
// });