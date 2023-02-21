import pizzaIcon from './images/pixel.jpeg';
import saladIcon from './images/salad.jpg';
import breadIcon from './images/gbread.jpg';

function header() {
    const header = document.createElement('div')
    header.setAttribute('id', 'header')
    header.innerText = 'Nikki\'s Nom Nom\'s'

    return header
}
document.getElementById('content').appendChild(header());


function navBar() {
    const navBar = document.createElement('div')
    navBar.setAttribute('id', 'navBar')

    const about = document.createElement('div');
    about.textContent = 'About';
    
    const menu = document.createElement('div');
    menu.textContent = 'Menu';

    const contact = document.createElement('div');
    contact.textContent = 'Contact';

    document.getElementById('content').appendChild(navBar);
    document.getElementById('navBar').appendChild(about);
    document.getElementById('navBar').appendChild(menu);
    document.getElementById('navBar').appendChild(contact);
}
navBar()

function mainImage() {
    const imgDiv = document.createElement('div')
    imgDiv.setAttribute('id', 'imgDiv');
    
    const pizzaImg = document.createElement('img')
    pizzaImg.classList.add('pizzaImg');
    pizzaImg.src = pizzaIcon

    const saladImg = document.createElement('img')
    saladImg.classList.add('saladImg');
    saladImg.src = saladIcon

    const breadImg = document.createElement('img')
    breadImg.classList.add('breadImg');
    breadImg.src = breadIcon

    document.getElementById('content').appendChild(imgDiv);
    document.getElementById('imgDiv').appendChild(pizzaImg)
    document.getElementById('imgDiv').appendChild(saladImg)
    document.getElementById('imgDiv').appendChild(breadImg)
}
mainImage()

// function bodyContent() {
//     const bodyContent = document.createElement('div')
//     bodyContent.setAttribute('id', 'imgDiv');
    
//     const bodyDescription = 
// document.getElementsByClassName('imgDiv').appendChild(pizzaImg)





// document.getElementById('header').appendChild(navBar());

// const about = document.createElement('div');
// about.textContent = 'About';

// const menu = document.createElement('div');
// menu.textContent = 'Menu';

// const contact = document.createElement('div');
// contact.textContent = 'Contact';

// document.getElementById('header').appendChild(about);
// document.getElementById('header').appendChild(menu);
// document.getElementById('header').appendChild(contact);



