import './style.css'; 
import './initialLoad.js';
import './aboutPage.js';
import './menuPage.js';
import './contactPage.js';

import { aboutPage } from './aboutPage.js';
import { menuPage } from './menuPage.js';
import { buildLayout } from './initialLoad.js';
import { contactPage } from './contactPage.js';

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

const homepageLink = document.getElementById('Home')
homepageLink.addEventListener('click', landingReset)
function landingReset() {
    contentContainer.innerText = '';
    buildLayout()
}

const contactLink = document.getElementById('Contact')
contactLink.addEventListener('click', contactReset)
function contactReset() {
    contentContainer.innerText = '';
    contactPage()
}

