const toggleLinkClassList = (entry, activeClassName, treshold = 0.25) => {
    const switchEntryClassName = (linkId) => {
        const link = document.getElementById(linkId);
        if (entry.intersectionRatio >= treshold) link.classList.add(activeClassName);
        else link.classList.remove(activeClassName);
    }
    const removeEntriesClassName = (linkId) => {
        const link = document.getElementById(linkId);
        link.classList.remove(activeClassName);
    }
    const id = entry.target.id;
    switch (id) {
        case 'aboutUs':
            switchEntryClassName('linknosotros');
            removeEntriesClassName('linkponentes');
            removeEntriesClassName('linkcronograma');
            removeEntriesClassName('linkprecios');
            removeEntriesClassName('linkinscripcion');
            break;
        case 'specialties':
            switchEntryClassName('linkponentes');
            removeEntriesClassName('linknosotros');
            removeEntriesClassName('linkcronograma');
            removeEntriesClassName('linkprecios');
            removeEntriesClassName('linkinscripcion');
            break;
        case 'branches':
            switchEntryClassName('linkcronograma');
            removeEntriesClassName('linkponentes');
            removeEntriesClassName('linknosotros');
            removeEntriesClassName('linkprecios');
            removeEntriesClassName('linkinscripcion');
            break;
        case 'customerStories':
            switchEntryClassName('linkprecios');
            removeEntriesClassName('linkponentes');
            removeEntriesClassName('linkcronograma');
            removeEntriesClassName('linknosotros');
            removeEntriesClassName('linkinscripcion');
            break;
        case 'contactFormSection':
            switchEntryClassName('linkinscripcion');
            removeEntriesClassName('linkponentes');
            removeEntriesClassName('linkcronograma');
            removeEntriesClassName('linkprecios');
            removeEntriesClassName('linknosotros');
            break;
        default:
            break;
    }
}

const getAllSections = () => {
    const aboutUsSection = document.getElementById("aboutUs");
    const specialitesSection = document.getElementById("specialties");
    const brancheSection = document.getElementById("branches");
    const customerStoriesSection = document.getElementById("customerStories");
    const contactSection = document.getElementById("contactFormSection");

    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        toggleLinkClassList(entry, 'navigation__item--active', 0.75);
    }, {
        rootMargin: '0px',
        threshold: 0.75,
    })

    observer.observe(aboutUsSection);
    observer.observe(specialitesSection);
    observer.observe(brancheSection);
    observer.observe(customerStoriesSection);
    observer.observe(contactSection);


}

export default getAllSections;