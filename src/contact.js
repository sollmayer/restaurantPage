const createContactPage = () => {
    const contactContainer = document.createElement('div');
    const contactTitle = document.createElement('h1');
    const description = document.createElement('p');

    contactTitle.textContent = "CONTACT";
    description.textContent = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(description);
    contactContainer.classList.add('contact');

    return contactContainer;
}

export const loadContactPage = () => {
    document.querySelectorAll('.header button').forEach(btn => btn.classList.remove('active'))
    document.querySelector('.Contact').classList.add('active');
    const mainContainer = document.querySelector('.main');
    mainContainer.textContent = "";
    mainContainer.appendChild(createContactPage());
}