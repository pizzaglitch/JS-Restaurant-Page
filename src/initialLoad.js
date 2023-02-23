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
function createImg(idName, source) {
    const createImg = document.createElement('img')
    createImg.setAttribute('id', idName)
    createImg.src = source

    return createImg
}

//reates header
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

function landingPageText() {
    const infoParagraph = createClassElement('p','info','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius. Integer id arcu sed mi scelerisque consectetur ac sit amet velit. Aliquam rhoncus malesuada erat quis faucibus.')
    imgDiv.insertBefore(infoParagraph, document.getElementById('saladImg'))

}
landingPageText()

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
    
    imgDiv.insertBefore(hoursTable, document.getElementById('breadImg'))
}
contactHours()
// function header() {
//     const header = document.createElement('div')
//     header.setAttribute('id', 'header')
//     header.innerText = 'Nikki\'s Nom Nom\'s'

//     return header
// }