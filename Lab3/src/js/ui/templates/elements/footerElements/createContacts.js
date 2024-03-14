import { createH3Elements } from "../SimpleElements/createH3Elements.js"
import { createPElements } from "../SimpleElements/createPElements.js";

export const createContacts = ({ header, adress, phoneNumber, email }) => {
    const headerTemplate = createH3Elements(header, "contacts_header");
    const adressTemplate = createPElements(adress, "adress");
    const phoneNumberTemplate = createPElements(phoneNumber, "phone_number");
    const emailTemplate = createPElements(email, "email");

    const resultTemplate = `
    <div class="contacts columm_menu">
        ${headerTemplate}
        ${adressTemplate}
        ${phoneNumberTemplate}
        ${emailTemplate}
    </div>
    `
    return resultTemplate
}

export default createContacts