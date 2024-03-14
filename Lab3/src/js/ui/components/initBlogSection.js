import { blogData } from "../../mockData/blogData.js"
import { blogTemplate } from "../templates/blogTemplate.js";

const initBlogSection = (element) => {
    const blogNode = element.querySelector(".blog_section");
    blogNode.insertAdjacentHTML("beforeend", blogTemplate(blogData))
}
export default initBlogSection;