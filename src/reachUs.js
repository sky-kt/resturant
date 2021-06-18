export let loadReachUs = () => {
    let content = document.getElementById('content')
    let socialMediaLinks = document.createElement('div')
    let entireInfoContainer = document.createElement('div')
    entireInfoContainer.setAttribute('id', 'entireInfoContainer')
    socialMediaLinks.setAttribute('id', 'socialMediaLinks')

    let title = document.createElement('h1')
    let titleTextNode = document.createTextNode("Contact Us")
    title.setAttribute('id', 'title')
    title.setAttribute('class', 'font')
    title.appendChild(titleTextNode)
    content.appendChild(title)

    let locationName = document.createElement('div')
    let locationNameText = document.createTextNode(' 3240 Coors Blvd NW, Albuquerque, NM 87120')
    let locationIcon = document.createElement('i')
    locationIcon.setAttribute('class', 'fa fa-map-marker')

    locationName.appendChild(locationIcon)
    locationName.appendChild(locationNameText)
    locationName.setAttribute('id', 'locationName')
    locationName.setAttribute('class', 'font')
    content.appendChild(locationName)

    for(let i = 0; i <= 3; i++) {
        let individualLink = document.createElement('div')
        let individualLinkNode

        switch(i) {
            case(0):
                individualLinkNode = document.createTextNode('Email')
                individualLink.setAttribute('id', 'email')
                break;
            case(1):
                individualLinkNode = document.createTextNode('Twitter')
                individualLink.setAttribute('id', 'twitter')
                break;
            case(2):
                individualLinkNode = document.createTextNode('Facebook')
                individualLink.setAttribute('id', 'facebook')
                break;
            case(3):
                individualLinkNode = document.createTextNode('Youtube')
                individualLink.setAttribute('id', 'youtube')
                break;
            default:
                console.log('Error! Cannot create text node.')
                break;
        }
        individualLink.setAttribute('class', 'individualLink')
        individualLink.classList.add('font')
        individualLink.appendChild(individualLinkNode)
        socialMediaLinks.appendChild(individualLink)
    }

    let locationImage = document.createElement('img')
    locationImage.src = "../images/maps.png"
    locationImage.alt = "Location of resturant on map"
    locationImage.setAttribute('id', 'map')

    entireInfoContainer.appendChild(locationImage) //put image here
    entireInfoContainer.appendChild(socialMediaLinks)

    content.appendChild(entireInfoContainer)

    console.log('menu loaded')
    //now add link capabilities to buttons
}