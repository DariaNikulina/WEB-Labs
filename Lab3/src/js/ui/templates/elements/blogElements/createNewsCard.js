import { createH3Elements } from "../SimpleElements/createH3Elements.js"
import { createAElements } from "../SimpleElements/createAElements.js"
import { createPElements } from "../SimpleElements/createPElements.js";
import { createImgElements } from "../SimpleElements/createImgElements.js";

export const createNewsCard = ({ type, header, date, link, illustration }) => {
    switch (type) {
        case "main":
            const news = `
            <div class="main_news">
                ${createImgElements(illustration, "blogMainNewsImg")}
                <div class="content_main_news news">
                    ${createPElements(date, "data")}
                    ${createH3Elements(header, "news_title")}
                    ${createAElements(link, "full_article")}

                </div>
            </div>
            `;
            return news

        case "other":
            return `
            <div class="other_news">
                ${createImgElements(illustration, "blogOtherNewsImg")}
                <div class="content_other_news news">
                    ${createPElements(date, "data")}
                    ${createH3Elements(header, "news_title")}
                    ${createAElements(link, "full_article")}
                </div>
            </div>
        `;
        default:
            return ``;
    }
};

export default createNewsCard