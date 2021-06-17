import { loadAbout } from "./about.js"
import { loadConstants } from "./constants.js"
import { loadMenu } from "./menu.js"
import { loadReachUs } from "./reachUs.js"

LoadAbout()
addHeaderFunctionality()

function LoadAbout() {
    console.log('loading about')
    restartPage()
    loadAbout()
}

function LoadMenu() {
    console.log('loading menu')
    restartPage()
    loadMenu()
}

function LoadReachUs() {
    console.log('loading contact us')
    restartPage()
    loadReachUs()
}

//for resetting page
function restartPage() {
    removeChildNodes()
    loadConstants()
    addHeaderFunctionality()
}

function removeChildNodes() {
    let content = document.getElementById("content")
    while (content.firstChild) {
        console.log(content.firstChild)
        content.removeChild(content.firstChild)
    }
}

function addHeaderFunctionality() {
    about = document.getElementById("about")
    menu = document.getElementById("menu")
    contactUs = document.getElementById("contactUs")
    about.addEventListener("click", LoadAbout)
    menu.addEventListener("click", LoadMenu)
    contactUs.addEventListener("click", LoadReachUs)
    console.log('functionality header added')
}