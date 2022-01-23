const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
]; //배경화면 

const chosenImage = images[Math.floor(Math.random() * images.length)];//시계와 같이 숫자를 정수로 받기위해 작성
const bgImage = document.createElement("img"); //HTML에 img src라는 태그를 추가함

bgImage.src = `img/${chosenImage}`;//이미지의 소스의 위치를 알려줌
document.body.appendChild(bgImage); 
