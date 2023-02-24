import menuImg from './images/menu.jpg';
import { createImg } from './initialLoad.js';
import { createIdElement} from './initialLoad.js';

export function menuPage() {
    document.getElementById('contentContainer').appendChild(createImg('menuImg', menuImg));
    const menuParagraph = createIdElement('div','aboutParagraph', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius.');
    document.getElementById('contentContainer').appendChild(menuParagraph)
}


