// General web-page code

// counters are for keeping track of what content is displayed in project description:
//   0 - text, 1, 2, 3 - screenshots
let counters = {
    'face': 0,
    'robo': 0,
    'acie': 0,
    'teatr': 0
}

// declaring constants to show/hide project description text/screenshots
const faceFinderElement = document.getElementById("faceFinder")
faceFinderElement.addEventListener('click', function() { showScreenShot('face') })
const roboFriendsElement = document.getElementById("roboFriends")
roboFriendsElement.addEventListener('click', function() { showScreenShot('robo') })
const acieAnniversaryElement = document.getElementById("acieAnniversary")
acieAnniversaryElement.addEventListener('click', function() { showScreenShot('acie') })
const albatrossTheatreElement = document.getElementById("albatrossTheatre")
albatrossTheatreElement.addEventListener('click', function() { showScreenShot('teatr') })

function showScreenShot(elementName) {
    const text = document.getElementById(elementName+'Text')
    const img = document.getElementById(elementName+'Image')
    
    counters[elementName]++    
    if (counters[elementName] > 3) { counters[elementName] = 0 }

    const count = counters[elementName]
    if (count == 0) {
        img.style.display = 'none'
        text.style.display = 'block'
    } else {
        text.style.display = 'none'
        img.style.display = 'block'
        const imageName = 'img/'+elementName+count+'.png'
        img.src = imageName
    }
}


// Hello World script - 'Guess the Number' game
const gameHeader = document.getElementById('game-header')
const yesNoButtons = document.getElementById('yes-no-buttons')
const gameIntro = document.getElementById('game-intro')
const gameText = document.getElementById('game-text')
const gameDisplay = document.getElementById('display-container')
const numpad = document.getElementById('numpad-container')

const digit1 = document.getElementById('d1')
const digit2 = document.getElementById('d2')

let randomNumber = 0
const attempts = 6
let currentAttempt = 0
let numpadActive = false
let lost = false

const allAttempts = []
for (let i = 0; i < attempts; i++) {
    const attemptText = document.getElementById('a'+(i+1))
    allAttempts.push(attemptText)
}

function fadeOutElement(element) {
    element.style.opacity = '0'
}

function fadeInElement(element) {
    element.style.opacity = '1'
}

function newRound() {
    randomNumber = Math.floor(Math.random() * 100)
    console.log(randomNumber)
    numpadActive = true
    lost = false
    currentAttempt = 0
    digit1.innerText = '0'
    digit2.innerText = '0'
    
    for (a of allAttempts) {
        fadeOutElement(a)
    }
    allAttempts[0].innerText = "Enter your first guess"
    allAttempts[1].innerText = "Enter your second guess"
    allAttempts[2].innerText = "Enter your third guess"
    allAttempts[3].innerText = "Enter your fourth guess"
    allAttempts[4].innerText = "Enter your fifth guess"
    allAttempts[5].innerText = "Enter your last guess"

    fadeInElement(allAttempts[0])
}

function showControls() {
    gameHeader.innerText = "Would you like to play again?"
    gameHeader.style.display = 'none'
    yesNoButtons.style.display = 'none'
    gameIntro.style.display = 'block'
    gameText.style.display = 'block'
    gameDisplay.style.display = 'block'
    numpad.style.display = 'block'
    fadeInElement(gameIntro)
    fadeInElement(gameText)
    fadeInElement(gameDisplay)
    fadeInElement(numpad)
    fadeInElement(digit1)
    fadeInElement(digit2)

    newRound()
}

function startGame() {
    fadeOutElement(gameHeader)
    fadeOutElement(yesNoButtons)
    setTimeout(showControls, 600)
}

function buttonPressed(n) {
    if (numpadActive) {
        if (digit1.innerText == '0') {
            digit1.innerText = digit2.innerText
            digit2.innerText = n
        }
    }
}

function eraseNumber() {
    digit1.innerText = '0'
    digit2.innerText = '0'
}

function prepareReset() {
    setTimeout(() => {
        for (a of allAttempts) {
            fadeOutElement(a)
        }
        fadeOutElement(gameIntro)
        fadeOutElement(gameText)
        fadeOutElement(gameDisplay)
        fadeOutElement(numpad)

        setTimeout(() => {
            gameIntro.style.display = 'none'
            gameText.style.display = 'none'
            gameDisplay.style.display = 'none'
            numpad.style.display = 'none'
            gameHeader.style.display = 'block'
            yesNoButtons.style.display = 'block'
            fadeInElement(gameHeader)
            fadeInElement(yesNoButtons)
        }, 500);
    }, 3000);
}

function submitNumber() {
    numpadActive = false
    const guessNumber = Number(digit1.innerText+digit2.innerText)
    
    fadeOutElement(digit1)
    fadeOutElement(digit2)
    
    eraseNumber()

    if (guessNumber < randomNumber) {
        allAttempts[currentAttempt].innerText = "You typed "+guessNumber+", but my number is HIGHER!"
    } else if (guessNumber > randomNumber) {
        allAttempts[currentAttempt].innerText = "You typed "+guessNumber+", but my number is LOWER!"
    } else {
        allAttempts[currentAttempt].innerText = "Yes! You guessed it! My number is "+guessNumber+"!"
        prepareReset()
    }
    currentAttempt++
    if ( (currentAttempt === attempts) && (guessNumber !== randomNumber) ) {
        lost = true
    } else {
        if (guessNumber !== randomNumber) {
            fadeInElement(allAttempts[currentAttempt])
        }
    }

    if (lost) {
        allAttempts[currentAttempt-1].innerText = "You typed "+guessNumber+", but my number was "+randomNumber+"!"
        prepareReset()
    } else {
        if (guessNumber !== randomNumber) {
            numpadActive = true
            fadeInElement(digit1)
            fadeInElement(digit2)
        }
    }
}