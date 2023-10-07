const createMenuPage = () => {
    const menuContainer = document.createElement('div')
    const menuTitle = document.createElement('h1')
    menuTitle.textContent = "MENU";

    menuContainer.appendChild(menuTitle)
    menuContainer.appendChild(createDish("Dish1", 'description1', '0.00$'))
    menuContainer.appendChild(createDish("Dish2", 'description2', '0.00$'))
    menuContainer.appendChild(createDish("Dish3", 'description3', '0.00$'))
    menuContainer.appendChild(createDish("Dish4", 'description4', '0.00$'))
    menuContainer.appendChild(createDish("Dish5", 'description5', '0.00$'))
    menuContainer.classList.add('menu');
    
    return menuContainer;
}

const createDish = (name, description, price) => {
    const dishContainer = document.createElement('div')
    const dishName = document.createElement('h2');
    const dishDescription = document.createElement('p');
    const dishPrice = document.createElement('p');
    const dishLine = document.createElement('hr');
    dishName.textContent = name;
    dishDescription.textContent = description;
    dishPrice.textContent = price;

    dishContainer.classList.add('dish');
    dishContainer.appendChild(dishName);
    dishContainer.appendChild(dishDescription);
    dishContainer.appendChild(dishLine);
    dishContainer.appendChild(dishPrice);

    return dishContainer;
}

export const loadMenuPage = () => {
    document.querySelectorAll('.header button').forEach(btn => btn.classList.remove('active'))
    document.querySelector('.Menu').classList.add('active');
    const mainContainer = document.querySelector('.main');
    mainContainer.textContent = "";
    mainContainer.appendChild(createMenuPage());
}