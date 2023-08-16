console.log('testing ok✔');

const login = document.querySelector('.login-container');
const btnLogin = document.querySelector('.btn--login');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn--close-modal');
const btnInput = document.querySelector('.btn-input');
const header = document.querySelector('.header');


// typography
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "2ndhand Laptop/desktop.";
    }, 0);
    setTimeout(() => {
        text.textContent = "Networking services.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "IT services/Products.";
    }, 8000);
    setTimeout(() => {
        text.textContent = "reparing laptop/desktop.";
    }, 12000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 16000);

const showModel = function () {
    login.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log("btn clicked!");
};

const closeModel = function () {
    login.classList.add('hidden');
    overlay.classList.add('hidden');
}


// login btns
btnLogin.addEventListener('click', showModel);
btnClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
