export let loadMenu = () => {
    let content = document.getElementById('content')

    //make title
    let title = document.createElement('h1')
    let titleTextNode = document.createTextNode("Menu")
    title.setAttribute('id', 'title')
    title.setAttribute('class', 'font')
    title.appendChild(titleTextNode)

    let menuStyler = document.createElement('div')
    menuStyler.setAttribute('class', 'menuStyler')

    let menuContainer = document.createElement('div')
    menuContainer.setAttribute('class', 'menuContainer')
    
    for(let i = 0; i < 6; i++) {
        let menuItem = document.createElement('div')
        menuItem.setAttribute('class', 'menuItem')

        let foodName = document.createElement('div')
        let foodDescription = document.createElement('div')
        let foodImage = document.createElement('img')

        foodImage.setAttribute('class', 'foodImage')

        let foodNameNode, foodDescriptionNode
        switch (i) {
            case 0:
                foodNameNode = document.createTextNode("Curly Fries")
                foodDescriptionNode = document.createTextNode("Russet Potatoes")
                foodImage.src = "./images/curlyFries.jpg"
                foodImage.alt = "Image of curly fries"
                break
            case 1:
                foodNameNode = document.createTextNode("Breakfast Burrito")
                foodDescriptionNode = document.createTextNode("Flour tortilla, ground beef, rice, egg, guacamole")
                foodImage.src = "./images/burrito.jpeg"
                foodImage.alt = "Image of breakfast burrito"
                break
            case 2:
                foodNameNode = document.createTextNode("El Pollo Frito")
                foodDescriptionNode = document.createTextNode("Fried chicken, the spiciest of spices")
                foodImage.src = "./images/friedChicken.jpg"
                foodImage.alt = "Image of fried chicken"
                break
            case 3:
                foodNameNode = document.createTextNode("Quesadilla")
                foodDescriptionNode = document.createTextNode("Cheese, handmade corn tortillas")
                foodImage.src = "./images/quesadilla.webp"
                foodImage.alt = "Image of quesadilla"
                break
            case 4:
                foodNameNode = document.createTextNode("Cheeseburger")
                foodDescriptionNode = document.createTextNode("Beef patty, American cheese, brioche buns")
                foodImage.src = "./images/cheeseBurger.jpg"
                foodImage.alt = "Image of cheeseburger"
                break
            case 5:
                foodNameNode = document.createTextNode("[REDACTED]")
                foodDescriptionNode = document.createTextNode("Unnamed substance")
                foodImage.src = "./images/meth.jpg"
                foodImage.alt = "Image of meth"
                break
            default:
                break
        }
        foodName.setAttribute('class', 'foodName')
        foodName.classList.add('font')
        foodName.appendChild(foodNameNode)

        foodDescription.setAttribute('class', 'foodDescription')
        foodDescription.classList.add('font')
        foodDescription.appendChild(foodDescriptionNode)

        menuItem.appendChild(foodName)
        menuItem.appendChild(foodImage)
        menuItem.appendChild(foodDescription)
        
        menuContainer.appendChild(menuItem)
    }

    menuStyler.appendChild(menuContainer)
    content.prepend(menuStyler)
    content.prepend(title)
}