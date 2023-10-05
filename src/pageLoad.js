import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import {loadContactPage} from "./contact"

const createHeader = () => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add("header");
    const titleElement = document.createElement('h1');
    titleElement.textContent = "Restaurant";
    
    
    headerContainer.appendChild(titleElement)
    headerContainer.appendChild(createNav())
    return headerContainer;
}
const createNav = () => {
    const navContainer = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    homeBtn.classList.add('Home');
    menuBtn.classList.add('Menu');
    contactBtn.classList.add('Contact');

    homeBtn.addEventListener('click', loadHomePage)
    menuBtn.addEventListener('click', loadMenuPage)
    contactBtn.addEventListener('click', loadContactPage)

    navContainer.appendChild(homeBtn)
    navContainer.appendChild(menuBtn)
    navContainer.appendChild(contactBtn)

    return navContainer;
}
const createMainContent = () => {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main');

    return mainContainer;
}

const initialLoad = () => {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMainContent());
}

export default initialLoad;