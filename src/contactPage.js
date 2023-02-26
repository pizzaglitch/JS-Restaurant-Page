import phoneImg from './images/phone.jpeg'
import { createImg } from './initialLoad.js';
import breadImg from './images/gbread.jpg';
import { createClassElement } from './initialLoad.js';
import { createIdElement } from './initialLoad.js';

export function contactPage() {
    document.getElementById('contentContainer').appendChild(createImg('phoneImg', phoneImg));
    const locationPara = createClassElement('p','contactPara', 'We\'re located at 123 Lorem Ipsum Way, City, State.');
    const phonePara = createClassElement('p','contactPara', 'Contact us at (555) 555-5555.');
    document.getElementById('contentContainer').appendChild(locationPara)
    document.getElementById('contentContainer').appendChild(phonePara)
    contactHours()
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const hours = ['9am - 5pm', '10am - 4pm']
function contactHours() {
    const hoursTable = createIdElement('table', 'contactHours', '')
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
    document.getElementById('contentContainer').appendChild(hoursTable);
    // contentContainer.insertBefore(hoursTable, document.getElementById('breadImg'))
    // document.getElementById('contentContainer').appendChild(createImg('breadImg', breadImg));
}