let scoreHomeEl = document.getElementById("score-home")
let scoreHome = 0

let scoreGuestEl = document.getElementById("score-guest")
let scoreGuest = 0

const homeBtn1 = document.getElementById("home-btn1")
const homeBtn2 = document.getElementById("home-btn2")
const homeBtn3 = document.getElementById("home-btn3")

const guestBtn1 = document.getElementById("guest-btn1")
const guestBtn2 = document.getElementById("guest-btn2")
const guestBtn3 = document.getElementById("guest-btn3")

homeBtn1.addEventListener("click", function increaseHomeScore1() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
})

homeBtn2.addEventListener("click", function increaseHomeScore2() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
})

homeBtn3.addEventListener("click", function increaseHomeScore3() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
})

guestBtn1.addEventListener("click", function increaseGuestScore1() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
})

guestBtn2.addEventListener("click", function increaseGuestScore2() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
})

guestBtn3.addEventListener("click", function increaseGuestScore3() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
})

function newGame() {
    scoreGuest = 0
    scoreHome = 0
    scoreGuestEl.textContent = scoreGuest
    scoreHomeEl.textContent = scoreHome
}
