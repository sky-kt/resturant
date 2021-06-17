export let loadAbout = () => {
    let content = document.getElementById('content')

    let title = document.createElement('h1')
    let titleTextNode = document.createTextNode("Los Pollos Hermanos")
    title.setAttribute('id', 'title')
    title.setAttribute('class', 'font')

    let aboutStyler = document.createElement('div')
    aboutStyler.setAttribute('class', 'aboutStyler')

    let aboutContainer = document.createElement('div')
    aboutContainer.setAttribute('class', 'aboutContainer')

    let aboutText = document.createElement('p')
    let aboutTextNode = document.createTextNode("Where something delicious is always cooking.")
    aboutText.setAttribute('class', 'font')
    aboutText.setAttribute('id', 'introParagraph')

    let ownerPhoto = document.createElement("img")
    ownerPhoto.src = "../images/gustavo.png"
    ownerPhoto.alt = "Our founder, Gustavo"
    ownerPhoto.setAttribute('id', 'gustavoPFP')

    title.appendChild(titleTextNode)
    aboutText.appendChild(aboutTextNode)
    aboutContainer.appendChild(aboutText)
    aboutContainer.appendChild(ownerPhoto)
    aboutStyler.appendChild(aboutContainer)
    content.appendChild(title)
    content.appendChild(aboutStyler)

    console.log('about loaded')
}