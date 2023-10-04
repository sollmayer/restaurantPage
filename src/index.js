import initialLoad from "./pageLoad";
import { populateHomePage } from "./home";
import { populateMenuPage } from "./menu";
import {populateContactPage} from "./contact"

initialLoad();

const homeBtn = document.querySelector('.Home')
const menuBtn = document.querySelector('.Menu')
const contactBtn = document.querySelector('.Contact')
homeBtn.addEventListener('click', () => {
    document.querySelector('.main').appendChild(populateHomePage());
})
menuBtn.addEventListener('click', () => {
    document.querySelector('.main').appendChild(populateMenuPage());
})
contactBtn.addEventListener('click', () => {
    document.querySelector('.main').appendChild(populateContactPage());
})