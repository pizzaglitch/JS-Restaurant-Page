import dinnerTable from './images/dinnerTable.jpeg';
import us from './images/us.jpeg'
import { createImg } from './initialLoad.js';
import { createIdElement} from './initialLoad.js';
import { createClassElement } from './initialLoad.js';
// const aboutParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius.';
// createIdElement('div','aboutParagraph', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius.')
// const aboutParagraph = document.getElementById('aboutParagraph')

export function aboutPage() {
    document.getElementById('contentContainer').appendChild(createImg('dinnerTable', dinnerTable));
    const aboutParagraph = createIdElement('p','aboutParagraph', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor neque id rutrum hendrerit. Maecenas semper volutpat fermentum. Fusce maximus sapien libero. Cras porttitor sem at interdum venenatis. Mauris feugiat ipsum eget mauris tincidunt eleifend. Nunc varius auctor nunc vel laoreet. Maecenas faucibus erat vel urna pretium, in porta velit varius.');
    document.getElementById('contentContainer').appendChild(aboutParagraph)
    document.getElementById('contentContainer').appendChild(createImg('us', us));
    document.getElementById('contentContainer').appendChild(createClassElement('div', 'aboutUs', 'I love you more than pasta pizza.'));
    document.getElementById('contentContainer').appendChild(createClassElement('div', 'aboutUs', 'Always and forever.'));

}