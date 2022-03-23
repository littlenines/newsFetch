import {displayNews} from './main.js'
import { fetchNewsData } from "./fetchApi.js";

const buttonLoad = document.querySelector('[data-load-more]');

const newsData = await fetchNewsData();

const run = () => {displayNews(newsData)}

buttonLoad.addEventListener('click', () => displayNews(newsData));

run();