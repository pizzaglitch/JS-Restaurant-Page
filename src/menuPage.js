import menuImg from './images/menu.jpg';
import pastaImg from './images/menu/mushroompasta.jpeg';
import steakImg from './images/menu/steak.jpeg'
import bananaBreadImg from './images/menu/bananabread.jpeg';
import oysterImg from './images/menu/oyster.jpeg';
import cakeImg from './images/menu/cake.jpeg';
import pancakeImg from './images/menu/blueberrypancake.jpeg';
import { createImg } from './initialLoad.js';
import { createClassElement} from './initialLoad.js';
import { createNewElement } from './initialLoad.js';
import { createIdElement } from './initialLoad.js';

export function menuPage() {
    document.getElementById('contentContainer').appendChild(createImg('menuImg', menuImg));
    document.getElementById('contentContainer').appendChild(createIdElement('div','menuContainer',''));

    fillMenu()
}

function menuItem(title, description, imgName, imgSource) {
    const menuItem = document.getElementById('menuContainer').appendChild(createClassElement('section','menuItem',''));
    menuItem.appendChild(createImg(imgName, imgSource))
    menuItem.appendChild(createNewElement('h3', title));
    menuItem.appendChild(createNewElement('p', description));
}

function fillMenu() {
    menuItem('steak', 'rare or medium-rare only. don\'t be a baby.', 'steak', steakImg)
    menuItem('fungi pasta', 'pasta with lots of different types of mushrooms. NO CORDYCEPS.', 'pasta', pastaImg)
    menuItem('oysters', 'a tower of east-coast oysters, west-coast oysters, oysters oysters oysters!', 'oysterImg', oysterImg)
    menuItem('polenta cake', 'i don\'t even know what it is to be honest. i think it\'s an italian desert. i just know it\'s good.', 'polentaCake', cakeImg)
    menuItem('fruit pancake', 'it\'s breakfast for dessert. I dunno.', 'pancake', pancakeImg)
    menuItem('banana bread', 'it is banana bread.', 'bananaBread', bananaBreadImg)
}