import pizzaImg from './images/pixel.jpeg';
import saladImg from './images/salad.jpg';
import breadImg from './images/gbread.jpg';

//Creates an ID element 
function createIdElement(elementType, id, textContent) {
    const createIdElement = document.createElement(elementType)
    createIdElement.setAttribute('id', id)
    createIdElement.innerText = textContent

    return createIdElement
}

//Creates a class element 
function createClassElement(elementType, className, textContent) {
    const createClassElement = document.createElement(elementType)
    createClassElement.setAttribute('class', className)
    createClassElement.innerText = textContent

    return createClassElement
}

//Creates img 
function createImg(className, source) {
    const createImg = document.createElement('img')
    createImg.setAttribute('class', className)
    createImg.src = source

    return createImg
}
// function header() {
//     const header = document.createElement('div')
//     header.setAttribute('id', 'header')
//     header.innerText = 'Nikki\'s Nom Nom\'s'

//     return header
// }

//same as above, just neater, creates header
document.getElementById('content').appendChild(createIdElement('div', 'header', 'Nikki\'s Nom Nom\'s'));

//creates navbar links 
function navBar() {
    document.getElementById('content').appendChild(createIdElement('div', 'navBar', ''));
    document.getElementById('navBar').appendChild(createClassElement('div', 'navLink', 'About'));
    document.getElementById('navBar').appendChild(createClassElement('div', 'navLink', 'Menu'));
    document.getElementById('navBar').appendChild(createClassElement('div', 'navLink', 'Contact'));
}
navBar()

function mainImage() {
    document.getElementById('content').appendChild(createIdElement('div', 'imgDiv', ''));
    document.getElementById('imgDiv').appendChild(createImg('pizzaImg', pizzaImg));
    document.getElementById('imgDiv').appendChild(createImg('saladImg', saladImg));
    document.getElementById('imgDiv').appendChild(createImg('breadImg', breadImg));
}
mainImage()