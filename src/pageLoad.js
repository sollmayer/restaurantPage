const createHeader = () => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add("header");
    const titleElement = document.createElement('h1');
    titleElement.textContent = "Restaurant";
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    homeBtn.classList.add('Home');
    menuBtn.classList.add('Menu');
    contactBtn.classList.add('Contact');

    headerContainer.appendChild(titleElement)
    headerContainer.appendChild(homeBtn)
    headerContainer.appendChild(menuBtn)
    headerContainer.appendChild(contactBtn)
    return headerContainer;
}

const initialLoad = () => {
    document.querySelector('#content').appendChild(createHeader());
}

export default initialLoad;