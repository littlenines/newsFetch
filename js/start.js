import {displayNews} from './main.js'

const buttonLoad = document.querySelector('[data-load-more]');

const run = () => {
    displayNews();
}


buttonLoad.addEventListener('click', () => {
    displayNews();
})

run();