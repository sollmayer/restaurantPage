const createContactPage = () => {
    const contactContainer = document.createElement('div');
    const contactTitle = document.createElement('h1');
    const description = document.createElement('p');
    const contactPhone = document.createElement('p')
    const contactFeedback = document.createElement('button')

    contactTitle.textContent = "CONTACT US";
    description.textContent = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    contactPhone.textContent = 'Phone Number: +100000000000';
    contactFeedback.textContent = 'Send Feedback';

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(description);
    contactContainer.appendChild(contactPhone);
    contactContainer.appendChild(contactFeedback);
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