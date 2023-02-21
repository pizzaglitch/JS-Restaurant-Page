import './style.css'; 
import './initialLoad.js';

function divCreator() {
    const element = document.createElement('div'); 
    element.classList.add('hello');
    return element
}
document.getElementById('content').appendChild(divCreator());
// getElementById('content')