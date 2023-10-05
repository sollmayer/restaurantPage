const createMenuPage = () => {
    const menuContainer = document.createElement('div')
    const menuTitle = document.createElement('h1')
    const description = document.createElement('p')
    description.textContent = "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    menuTitle.textContent = "MENU";

    menuContainer.appendChild(menuTitle)
    menuContainer.appendChild(description)

    return menuContainer;
}

export const loadMenuPage = () => {
    const mainContainer = document.querySelector('.main');
    mainContainer.textContent = "";
    mainContainer.appendChild(createMenuPage());
}