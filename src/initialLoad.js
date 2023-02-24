import pizzaImg from './images/pixel.jpeg';
import saladImg from './images/salad.jpg';
import breadImg from './images/gbread.jpg';

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

//Creates img 
export function createImg(idName, source) {
    const createImg = document.createElement('img')
    createImg.setAttribute('id', idName)
    createImg.src = source

    return createImg
}

document.getElementById('content').appendChild(createIdElement('div', 'header', 'Nikki\'s Nom Nom\'s'));


function navBar() {
    document.getElementById('content').appendChild(createIdElement('div', 'navBar', ''));
    document.getElementById('navBar').appendChild(createIdElement('a', 'Home', 'Home'));
    document.getElementById('navBar').appendChild(createIdElement('a', 'Menu', 'Menu'));
    document.getElementById('navBar').appendChild(createIdElement('a', 'About', 'About'));
    document.getElementById('navBar').appendChild(createIdElement('a', 'Contact', 'Contact'));
}
navBar()


function landingPageImages() {
    const infoParagraph = createClassElement('p','info','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius.')

    document.getElementById('content').appendChild(createIdElement('div', 'contentContainer', ''));
    document.getElementById('contentContainer').appendChild(createImg('pizzaImg', pizzaImg));
    document.getElementById('contentContainer').appendChild(infoParagraph);
    document.getElementById('contentContainer').appendChild(createImg('saladImg', saladImg));
    document.getElementById('contentContainer').appendChild(createImg('breadImg', breadImg));
}
landingPageImages()

// function landingPageText() {
//     contentContainer.insertBefore(infoParagraph, document.getElementById('saladImg'))
// }
// const infoParagraph = createClassElement('p','info','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius.')

const hoursTable = createIdElement('table', 'contactHours', '')
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const hours = ['9am - 5pm', '10am - 4pm']
function contactHours() {
    let operationHours = document.createTextNode('Hours')
    hoursTable.appendChild(operationHours)
    days.forEach((day) => {
        let row1 = hoursTable.insertRow(day[-1])
        let cell2 = row1.insertCell(hours)
        let cell1 = row1.insertCell(day)
        cell1.innerText = day
        // cell2.innerText = hours
        if ([day] == 'Saturday' || [day] == 'Sunday') {
            cell2.innerText = hours[1]
        } else {
            cell2.innerText = hours[0]
        }
    })
    contentContainer.insertBefore(hoursTable, document.getElementById('breadImg'))
}
// landingPageText()
contactHours()

export function buildLayout() {
    contentContainer.innerText = '';
    landingPageImages()
    // landingPageText()
    contactHours()
}