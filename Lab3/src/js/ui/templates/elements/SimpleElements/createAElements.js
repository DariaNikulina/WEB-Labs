export const createAElements = ({ title, href }, className) => {
    return `<a class="${className}" href=${href}>
                ${title}
            </a>`
}

export default createAElements