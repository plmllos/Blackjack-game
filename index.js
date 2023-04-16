let player = {
    name: "Tandara",
    amount: "$400"
}

let sum = 0
let cards = []

let isAlive = false
let hasBlackJack = false

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let newCardEl = document.getElementById("new-card-btn")
let playerEl = document.getElementById("player-el")

newCardEl.disabled = true
newCardEl.style.cursor = "auto"

playerEl.textContent = "Player: " + player.name + " " + player.amount

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    newCardEl.disabled = false
    newCardEl.style.cursor = "pointer"
    renderGame()
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        messageEl.textContent = "Draw another card.."
    } else if (sum === 21) {
        messageEl.textContent = "You got a Blackjack!"
        isAlive = false
        hasBlackJack = true
        newCardEl.disabled = true
        newCardEl.style.cursor = "auto"
    } else {
        messageEl.textContent = "You are out of the game."
        isAlive = false
        newCardEl.disabled = true
        newCardEl.style.cursor = "auto"
    }
}

function newCard() {
    if (isAlive == true) {
        let anotherCard = getRandomNumber()
        sum = sum + anotherCard
        cards.push(anotherCard)
        renderGame()
    }
}