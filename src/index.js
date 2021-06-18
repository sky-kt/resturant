import { loadAbout } from "./about.js"
import { loadConstants } from "./constants.js"
import { loadMenu } from "./menu.js"
import { loadReachUs } from "./reachUs.js"

LoadReachUs()
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
    addButtonFunctionality()
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

function addButtonFunctionality() {
    email = document.getElementById("email")
    twitter = document.getElementById("twitter")
    facebook = document.getElementById("facebook")
    youtube = document.getElementById("youtube")

    email.addEventListener("click", function () { 
        window.open("https://mail.google.com/mail/u/0/?fs=1&to=lospolloshermanos@gmail.com&su=An%20Inquiry&body=(Please%20do%20not%20send%20an%20email%20to%20this%20account.%20I%20do%20not%20own%20it-%20thanks%20:D)&tf=cm", "_blank") 
    })

    twitter.addEventListener("click", function () {
        window.open("https://twitter.com/breakingbad?lang=en", "_blank")
    })

    facebook.addEventListener("click", function () {
        window.open("https://www.facebook.com/BreakingBad/", "_blank")
    })

    youtube.addEventListener("click", function () {
        window.open("https://www.youtube.com/channel/UCc0YbtMkRdhcqwhu3Oad-lw", "_blank")
    })
}