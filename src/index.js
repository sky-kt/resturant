import { loadAbout } from "./about.js"
import { loadConstants } from "./constants.js"

loadAbout()
loadConstants()

let about = document.getElementById("about")
let menu = document.getElementById("menu")
let contactUs = document.getElementById("contactUs")

about.addEventListener("click", LoadAbout)
menu.addEventListener("click", LoadMenu)
contactUs.addEventListener("click", LoadContactUs)

function LoadAbout() {
    console.log('loading about')
    removeChildNodes()
}

function LoadMenu() {
    console.log('loading menu')
    removeChildNodes()
}

function LoadContactUs() {
    console.log('loading contact us')
    removeChildNodes()
}

function removeChildNodes() {
    let content = document.getElementById("content")
    while (content.firstChild) {
        console.log(content.firstChild)
        content.removeChild(content.firstChild)
    }
}