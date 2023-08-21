console.log('testing ok✔');

const login = document.querySelector('.login-container');
const btnLogin = document.querySelector('.btn--login');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn--close-modal');
const btnInput = document.querySelector('.btn-input');
const header = document.querySelector('.header');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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


///////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
  
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

  ///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);