import pizzaIcon from './images/pixel.jpeg';
import saladIcon from './images/salad.jpg';
import breadIcon from './images/gbread.jpg';

//Creates an ID element 
function createIdElement(elementType, id, textContent) {
    const newType = document.createElement(elementType)
    newType.setAttribute('id', id)
    newType.innerText = textContent

    return newType
}

//Creates a class element 

function createClassElement(elementType, className, textContent) {
    const createClassElement = document.createElement(elementType)
    createClassElement.setAttribute('class', className)
    createClassElement.innerText = textContent

    return createClassElement
}



function header() {
    const header = document.createElement('div')
    header.setAttribute('id', 'header')
    header.innerText = 'Nikki\'s Nom Nom\'s'

    return header
}
document.getElementById('content').appendChild(header());


function navBar() {
    // const navBar = document.createElement('div')
    // navBar.setAttribute('id', 'navBar')

    // const about = document.createElement('div');
    // about.textContent = 'About';
    
    // const menu = document.createElement('div');
    // menu.textContent = 'Menu';

    // const contact = document.createElement('div');
    // contact.textContent = 'Contact';

    // document.getElementById('content').appendChild(navBar);
    document.getElementById('content').appendChild(createIdElement('div', 'navBar', ''));
    document.getElementById('navBar').appendChild(createClassElement('div', 'navLink', 'About'));
    document.getElementById('navBar').appendChild(createClassElement('div', 'navLink', 'Menu'));
    document.getElementById('navBar').appendChild(createClassElement('div', 'navLink', 'Contact'));




    // document.getElementById('navBar').appendChild(about);
    // document.getElementById('navBar').appendChild(menu);
    // document.getElementById('navBar').appendChild(contact);

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
    // document.getElementById('imgDiv').appendChild(infoParagraph)

    document.getElementById('imgDiv').appendChild(saladImg)
    
    document.getElementById('imgDiv').appendChild(breadImg)

}
mainImage()

// function contactHours() {
//     const contactHoursContainer = document.createElement('h1');
//     contactHoursContainer.setAttribute('id', 'contactHoursContainer')
//     contactHoursContainer.textContent = 'Contact Hours';
    
//     const infoParagraph = document.createElement('div');
//     infoParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius. Integer id arcu sed mi scelerisque consectetur ac sit amet velit. Aliquam rhoncus malesuada erat quis faucibus. ';
//     infoParagraph.classList.add('infoParagraph');

   
//     document.getElementById('content').appendChild(imgDiv);
//     document.getElementById('imgDiv').appendChild(pizzaImg)
//     document.getElementById('imgDiv').appendChild(infoParagraph)

//     document.getElementById('imgDiv').appendChild(saladImg)
    
//     document.getElementById('imgDiv').appendChild(breadImg)
// }
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



