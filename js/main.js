import { fetchNewsData } from "./fetchApi.js";

const news = document.querySelector('[data-news]');

let currentIndex = 0;
export const displayNews = () => {
    fetchNewsData().then(data => {
        var maxresult = 10;
        for (let i = 0; i < maxresult; i++) {
            const { title, category } = data[i+currentIndex];

            let newsSection = document.createElement('div');
            newsSection.setAttribute('class','news-section');
            let newsTimeline = document.createElement('div');
            newsTimeline.setAttribute('class','news-timeline');
            let timelineTime = document.createElement('p');
            let timelineText = document.createTextNode((i+1) + currentIndex);
            timelineTime.appendChild(timelineText);
            let timePrefix = document.createElement('p');
            timePrefix.setAttribute('class','time-prefix');
            let prefixText = document.createTextNode('min');
            timePrefix.appendChild(prefixText);
            //news timeline
            newsTimeline.appendChild(timelineTime)
            newsTimeline.appendChild(timePrefix)
            // img wrappers
            let imageWrapper = document.createElement('div');
            imageWrapper.setAttribute('class', 'image-wrapper');
            let imageThumbnail = document.createElement('img');
            imageThumbnail.setAttribute('class','image-thumbnail');
            imageThumbnail.src = 'assets/pictures/news.png';
            imageWrapper.appendChild(imageThumbnail);

            // news info
            let infoWrapp = document.createElement('div');
            let newsTitle = document.createElement('h2');
            newsTitle.setAttribute('class','news-title');
            let newsTitleText = document.createTextNode(title);
            newsTitle.appendChild(newsTitleText);
            let newsCategory = document.createElement('p');
            newsCategory.setAttribute('class','news-category');
            let newsCategoryText = document.createTextNode(category);
            newsCategory.appendChild(newsCategoryText);
            infoWrapp.appendChild(newsTitle);
            infoWrapp.appendChild(newsCategory);
            // append all
            newsSection.appendChild(newsTimeline);
            newsSection.appendChild(imageWrapper);
            newsSection.appendChild(infoWrapp);
            news.appendChild(newsSection);

        //     news.innerHTML += `
        //     <div class="news-section">
        //     <div class="news-timeline">
        //         <p>${(i+1) + currentIndex}</p>
        //         <p class="time-prefix">min</p>
        //     </div>
        //     <div class="image-wrapper">
        //         <img src="assets/pictures/news.png" class="image-thumbnail" alt="news">
        //     </div>
        //     <div>
        //         <h2 class="news-title">${title}</h2>
        //         <p class="news-category">${category}</p>
        //     </div>
        // </div>`;

        }
        currentIndex += maxresult;
    });
}