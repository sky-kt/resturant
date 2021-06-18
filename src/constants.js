export let loadConstants = () => {
    let content = document.getElementById('content')
    let body = document.getElementById('body')
    let header = document.createElement("header")
    body.setAttribute('class', 'chickenBackground')
    header.setAttribute('id', 'header')

    let headerOption1 = document.createElement("div")
    let optionOneText = document.createTextNode("About")
    headerOption1.appendChild(optionOneText)
    headerOption1.setAttribute('class', 'font')
    headerOption1.setAttribute('id', 'about')
    headerOption1.classList.add('headerOption')

    let headerOption2 = document.createElement("div")
    let optionTwoText = document.createTextNode("Menu")
    headerOption2.appendChild(optionTwoText)
    headerOption2.setAttribute('class', 'font')
    headerOption2.setAttribute('id', 'menu')
    headerOption2.classList.add('headerOption')

    let headerOption3 = document.createElement("div")
    let optionThreeText = document.createTextNode("Contact Us")
    headerOption3.appendChild(optionThreeText)
    headerOption3.setAttribute('class', 'font')
    headerOption3.setAttribute('id', 'contactUs')
    headerOption3.classList.add('headerOption')

    header.appendChild(headerOption1)
    header.appendChild(headerOption2)
    header.appendChild(headerOption3)

    content.appendChild(header)
}