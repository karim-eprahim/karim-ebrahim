
import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  console.log(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  // language
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
  if (language == "ar") {
    let selected = document.querySelector(".arabic");
    selected.setAttribute("selected", "selected");
  }

});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

// dark mood 
const checkbox = document.getElementById('checkbox');
const navbar = document.querySelector(".navbar")
const currentTheme = localStorage.getItem('theme');

console.log(currentTheme)
if(currentTheme){
  if(currentTheme=="dark"){
    dark()
  }else if(currentTheme=="light"){
    light()
  }
}

checkbox.addEventListener('change', ()=>{
const currentTheme = localStorage.getItem('theme');
  if (currentTheme == "light") {
    dark()
  } else if(currentTheme == "dark") {
    light()
  }else{
    dark()
    console.log("null")
  }    
})

function dark (){
  document.body.classList.add('dark');
  navbar.classList.add("navbar-dark");
  localStorage.setItem('theme', 'dark');
  checkbox.checked=true
}
function light(){
  document.body.classList.remove('dark');
  navbar.classList.remove("navbar-dark");
  localStorage.setItem('theme', 'light');
}

// animation on scroll
function animatLeft() {
  var reveals = document.querySelectorAll(".animation-left");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__animated");
      reveals[i].classList.add("animate__fadeInLeft");
    }
  }
}
function animatRight() {
  var reveals = document.querySelectorAll(".animation-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__animated");
      reveals[i].classList.add("animate__fadeInRight");
    }
  }
}
function animatUp() {
  var reveals = document.querySelectorAll(".animation-up");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__animated");
      reveals[i].classList.add("animate__fadeInUp");
    }
  }
}

window.addEventListener("scroll", animatLeft , { passive: false });
window.addEventListener("scroll", animatRight , { passive: false });
window.addEventListener("scroll", animatUp , { passive: false });
