import './style.css'; 
import './initialLoad.js';
import './aboutPage.js';
import './menuPage.js';
import { aboutPage } from './aboutPage.js';
import { menuPage } from './menuPage.js';
// import { buildLayout } from './initialLoad.js';

// function divCreator() {
//     const element = document.createElement('div'); 
//     element.classList.add('hello');
//     return element
// }
// document.getElementById('content').appendChild(divCreator());
// getElementById('content')



const aboutLink = document.getElementById('About')
aboutLink.addEventListener('click', aboutReset)
function aboutReset() {
    contentContainer.innerText = '';
    aboutPage()
}

const menuLink = document.getElementById('Menu')
menuLink.addEventListener('click', menuReset)
function menuReset() {
    contentContainer.innerText = '';
    menuPage()
}

// const homepageLink = document.getElementById('Header')
// homepageLink.addEventListener('click', buildLayout())