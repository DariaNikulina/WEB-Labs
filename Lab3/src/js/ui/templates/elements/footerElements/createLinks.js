import { createAElements } from "../SimpleElements/createAElements.js"
import { createH3Elements } from "../SimpleElements/createH3Elements.js"

export const createLinks = ({ header, linkElements }, className) => {
    const headerTemplate = createH3Elements(header, "link_list_header");
    const linksTemplate = linkElements
        .map((link) => createAElements(link, "link_elem")).join('');

    const result = `
        <div class="${className}">
            ${headerTemplate}
            ${linksTemplate}
        </div>
    `

    return result
}

export default createLinks