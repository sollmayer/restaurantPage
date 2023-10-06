import { loadMenuPage } from "./menu"
const createHomePage = () => {
    const homeContainer = document.createElement('div')
    const homeTitle = document.createElement('h1')
    const description = document.createElement('p')
    const orderBtn = document.createElement('button')

    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    homeTitle.textContent = "RESTAURANT NAME";
    orderBtn.textContent = "Order Now";
    orderBtn.addEventListener('click', ()=> {
        loadMenuPage();
    })
    
    homeContainer.appendChild(homeTitle)
    homeContainer.appendChild(description)
    homeContainer.appendChild(orderBtn)
    homeContainer.classList.add('home');
    
    return homeContainer;
}

export const loadHomePage = () => {
    document.querySelectorAll('.header button').forEach(btn => btn.classList.remove('active'))
    document.querySelector('.Home').classList.add('active');
    const mainContainer = document.querySelector('.main');
    mainContainer.textContent = "";
    mainContainer.appendChild(createHomePage());
}