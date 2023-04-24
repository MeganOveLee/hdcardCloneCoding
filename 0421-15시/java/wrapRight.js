<script>

// ------------timer--------------
const Timer = document.getElementById('Timer');
let time = 180000;
let min = 3;
let sec = 60;

Timer.value = min + ":" + '00';

function timerSet() {
    Playtime = setInterval(function () {
        time = time - 1000;
        min = time / (60 * 1000);

        if (sec > 0 && sec > 10) {
            sec = sec - 1;
            Timer.value = Math.floor(min) + ':' + sec;
        } else if (sec > 0 && sec < 11) {
            sec = sec - 1;
            Timer.value = Math.floor(min) + ':' + '0' + sec;
        } else if (sec === 0) {
            sec = 59;
            Timer.value = Math.floor(min) + ':' + sec;
        }
    }, 1000);
}
timerSet();
setTimeout(function () {
    clearInterval(Playtime);
}, 180000);

// ------------랜덤넘버-------------//
const randomNum = document.querySelector('#number');

const firNum = Math.floor(Math.random() * 10);
const secNum = Math.floor(Math.random() * 10);
const thrNum = Math.floor(Math.random() * 10);
const fouNum = Math.floor(Math.random() * 10);
const fivNum = Math.floor(Math.random() * 10);
const sixNum = Math.floor(Math.random() * 10);


const numArr = [firNum, secNum, thrNum, fouNum, fivNum, sixNum];

let randomStr = '';

for (let i = 0; i < numArr.length; i++) {
    const charArr = numArr[i].toString();

    randomStr += charArr[0] + ' ';
}

randomNum.innerHTML = randomStr;
</script>