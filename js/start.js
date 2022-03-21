import {displayNews} from './main.js'
import {fetchNewsData}  from "./fetchApi.js";
const run = () => {
    displayNews(fetchNewsData());
}

run();