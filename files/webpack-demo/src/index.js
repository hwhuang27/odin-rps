import _ from 'lodash';
import myName from './myName';
import printMe from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('div');
    element.textContent = myName('David');

    btn.textContent = 'Click me and check the console!';
    btn.addEventListener('click', () => printMe());

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());