import { createContacts } from "./elements/footerElements/createContacts.js"
import { createGPT3 } from "./elements/footerElements/createGPT3.js"
import { createLinks } from "./elements/footerElements/createLinks.js"



export const footerTemplate = ({
    gpt3,
    link,
    company,
    contacts
}) => {
    const gpt3Template = createGPT3(gpt3);
    const linkTemplate = createLinks(link, "link columm_menu");
    const companyTemplate = createLinks(company, "company columm_menu");
    const contactsTemplate = createContacts(contacts);

    const resultTemplate = `
        <div class="gpt-3 columm_menu">
            ${gpt3Template}
        </div>
        <div class="footer_menu">
            ${linkTemplate}
            ${companyTemplate}
            ${contactsTemplate}
        </div>
    `;

    return resultTemplate
}