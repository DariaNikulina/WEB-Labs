import blogTextData from "../../mockData/blogTextData.js";
import { blogTextTemplate } from "../templates/blogTextTemplate.js";

const initblogText = () => {
  const blogTextNode = document.querySelector(".blog_text");
  blogTextNode.insertAdjacentHTML("beforeend", blogTextTemplate(blogTextData));
};

export default initblogText;