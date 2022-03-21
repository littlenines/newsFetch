import {fetchNewsData}  from "./fetchApi.js";

const news = document.querySelector('[data-news]');

export const displayNews = () => {
    fetchNewsData().then(data => {
        for (let i = 0; i < data.length; i++) {
            const { title, category, time, prefix } = data[i];

            news.innerHTML += `
            <div class="news-section">
            <div class="news-timeline">
                <p class="news-time-posted">${time}<span>${prefix}</span></p>
            </div>
            <div class="image-wrapper">
                <img src="assets/pictures/news.png" class="image-thumbnail" alt="news">
            </div>
            <div class="news-info">
                <h2 class="news-title">${title}</h2>
                <p class="news-category">${category}</p>
            </div>
        </div>`;
        }
    });
}