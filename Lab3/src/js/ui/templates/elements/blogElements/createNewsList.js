import { createNewsCard } from "./createNewsCard.js"

export const createNewsList = (mainAndOtherNews) => {
    const newsTemplate = mainAndOtherNews
        .map((news) => createNewsCard(news));

    const mainNewsTemplates = newsTemplate.filter((template) => template.includes('class="main_news"')).join('');
    const otherNewsTemplates = newsTemplate.filter((template) => template.includes('class="other_news"')).join('');

    return { mainNewsTemplates, otherNewsTemplates };
};

export default createNewsList