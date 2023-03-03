import pizzaImg from './images/pixel.jpeg';
import saladImg from './images/salad.jpg';
import buildingImg from './images/building.jpeg';
// import footer from './images/hotsauce.jpeg';
// createImg('footer', footer)
// const footerImg = document.getElementById('footer')
// document.body.style.backgroundImage = footerImg;
// to do ^^^^^ Create background image and place @ footer

//Creates an ID element 
export function createIdElement(elementType, id, textContent) {
    const createIdElement = document.createElement(elementType)
    createIdElement.setAttribute('id', id)
    createIdElement.innerText = textContent

    return createIdElement
}

//Creates a class element 
export function createClassElement(elementType, className, textContent) {
    const createClassElement = document.createElement(elementType)
    createClassElement.setAttribute('class', className)
    createClassElement.innerText = textContent

    return createClassElement
}

//Creates a classless/id-less element and assigns text
export function createNewElement(elementType, textContent) {
    const createNewElement = document.createElement(elementType)
    createNewElement.innerText = textContent

    return createNewElement
}

//Creates img 
export function createImg(idName, source) {
    const createImg = document.createElement('img')
    createImg.setAttribute('id', idName)
    createImg.src = source

    return createImg
}

//unchanging divs (header and content)
document.getElementById('content').appendChild(createNewElement('header', 'Nikki\'s Nom Noms'));

function navBar() {
    document.getElementById('content').appendChild(createIdElement('nav', 'navBar', ''));
    document.getElementById('navBar').appendChild(createIdElement('a', 'Home', 'Home'));
    document.getElementById('navBar').appendChild(createIdElement('a', 'Menu', 'Menu'));
    document.getElementById('navBar').appendChild(createIdElement('a', 'About', 'About'));
    document.getElementById('navBar').appendChild(createIdElement('a', 'Contact', 'Contact'));
    document.getElementById('content').appendChild(createIdElement('main', 'contentContainer', ''));
}
navBar()

function landingPageContent() {
    const infoParagraph = createClassElement('p','info','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius.')
    
    document.getElementById('contentContainer').appendChild(createImg('buildingImg', buildingImg));
    document.getElementById('contentContainer').appendChild(infoParagraph);
    document.getElementById('contentContainer').appendChild(createImg('saladImg', saladImg));
    // document.getElementById('contentContainer').appendChild(createImg('pizzaImg', pizzaImg));
}
landingPageContent()

export function buildLayout() {
    contentContainer.innerText = '';
    landingPageContent()
}