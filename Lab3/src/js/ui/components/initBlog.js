import blogData from "../../mockData/blogData.js";
import { blogTemplate } from "../templates/blogTemplate.js";

const initblog = () => {
  const blogNode = document.querySelector(".blog");
  blogNode.insertAdjacentHTML("beforeend", blogTemplate(blogData));
};

export default initblog;