import phoneImg from './images/phone.jpeg'
import { createImg } from './initialLoad.js';
import { contactHours } from './initialLoad.js';
import { createClassElement } from './initialLoad.js';

export function contactPage() {
    document.getElementById('contentContainer').appendChild(createImg('phoneImg', phoneImg));
    const locationPara = createClassElement('p','contactPara', 'We\'re located at 123 Lorem Ipsum Way, City, State.');
    const phonePara = createClassElement('p','contactPara', 'Contact us at (555) 555-5555.');
    document.getElementById('contentContainer').appendChild(locationPara)
    document.getElementById('contentContainer').appendChild(phonePara)
    contactHours()
}


