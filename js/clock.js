const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");//padstart가 string에서만 작동하기 때문에 number에서 String로 만들어줌 
    const seconds = String(date.getSeconds()).padStart(2, "0");//2자리미만은 0 을 붙이기 start는 앞에, End는 뒤에 붙여짐*
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //1초기다리지 않고 바로 화면에 나오게 하는방법 , 함수바로 실행시키면 됨
setInterval(getClock, 1000);//실시간 시간 호출 1000ms 1초마다