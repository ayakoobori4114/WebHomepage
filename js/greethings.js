const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const ANIMATION_FADE ="fade-in-box";

function onLoginSubmit(event){
    event.preventDefault(); //브라우저 작동멈춤 
    loginForm.classList.add(HIDDEN_CLASSNAME); //form 다시숨김
    const username = loginInput.value; //input.value를 username에 초기화
    localStorage.setItem(USERNAME_KEY, username); //username 을 key와 localStorage에 저장
    paintGreetings(username); //paintgreeting 함수 호출  (인자를받고있음) *밑에
}

function paintGreetings(username){ //h1요소에 hello텍스트와 유저이름을 넣어줌
    const helloFirst = document.querySelector("#hello-first");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);//hidden을 지워줌
    greeting.classList.add(ANIMATION_FADE);
    helloFirst.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);// show the form
    loginForm.addEventListener("submit", onLoginSubmit); //submit 감지
} else {
    paintGreetings(savedUsername);// show the greetings
}