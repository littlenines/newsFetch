export const fetchNewsData = async () => {
    try {
        const response = await fetch("../news.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}