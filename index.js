let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeScore = 0

function add1() {
    console.log("Button clicked")
    homeScore += 1
    homeEl.textContent = homeScore
}

function add2() {
    console.log("Button clicked")
    homeScore += 2
    homeEl.textContent = homeScore
}

function add3() {
    console.log("Button clicked")
    homeScore += 3
    homeEl.textContent = homeScore
}

let guestScore = 0

function guestAdd1() {
    console.log("Button clicked")
    guestScore += 1
    guestEl.textContent = guestScore
}
function guestAdd2() {
    console.log("Button clicked")
    guestScore += 2
    guestEl.textContent = guestScore
}
function guestAdd3() {
    console.log("Button clicked")
    guestScore += 3
    guestEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}