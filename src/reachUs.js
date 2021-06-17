export let loadReachUs = () => {
    let content = document.getElementById('content')
    let title = document.createElement('h1')
    let titleTextNode = document.createTextNode("Contact Us")
    title.setAttribute('id', 'title')
    title.setAttribute('class', 'font')
    title.appendChild(titleTextNode)
    content.appendChild(title)

    
    console.log('menu loaded')
}