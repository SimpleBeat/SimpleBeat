const header = document.getElementById("myHeader")
const sticky = header.offsetTop
const paper = document.getElementById("myPaper")
let currentPage = "W"

const welcomeLink = document.getElementById("welcome")
const projectsLink = document.getElementById("projects")
const articlesLink = document.getElementById("articles")
welcomeLink.addEventListener("click", function() { showPage("W") })
projectsLink.addEventListener("click", function() { showPage("P") })
articlesLink.addEventListener("click", function() { showPage("A") })

let articlesList = []; // list of all articles from articlesList.txt
let projectsList = []; // list of all projects from projectsList.txt
const welcomePage = [
    "Welcome to SimpleBeat!",
    "<div class='article-image to-left'><img src='ilya-avatar.jpg' alt='ilya avatar'></div>",
    "<p>I am a web developer with experience in design and mobile software engineering.</p>",
    "<p>I've been building, deploying, and maintaining websites for over <b>20 years.</b></p>"
]

// Helper functions
// ----------------

// makes the menu stick to the top of the page when scrolling
function checkOffset() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Main functions
// --------------

// loads articles and projects list from text files
function loadLists() {
    fetch("./articles/!articlesList.txt")
        .then(resp => resp.text())
        .then(resp => resp.split("\n"))
        .then(result => { articlesList = result })
    fetch("./projects/!projectsList.txt")
        .then(resp => resp.text())
        .then(resp => resp.split("\n"))
        .then(result => { projectsList = result })
}

// constructs and renders regular page using an array of elements
function constructPage(elements) {
    const article = document.createElement("div")
    const title = document.createElement("div")
    const text = document.createElement("div")
    const divider = document.createElement("p")
    const dividerP = document.createElement("div")

    article.classList.add("article")
    title.classList.add("article-title")
    text.classList.add("article-body")
    dividerP.classList.add("divider")

    title.innerText = elements[0]
    let allText = ""
    for (let i=1; i<elements.length; i++) {
        allText += elements[i]
    }
    text.innerHTML = allText

    article.append(title)
    article.append(text)
    divider.append(dividerP)
    article.append(divider)
    paper.append(article)
}

function showFull(pageName) {
    console.log("showing full description!")
}

function constructCard(elements) {
    const cardContainer = document.createElement("div")
    const cardTitle = document.createElement("div")
    const cardDate = document.createElement("div")
    const cardText = document.createElement("div")
    const cardFullLink = document.createElement("div")
    cardContainer.classList.add("card-container")
    cardTitle.classList.add("card-title")
    cardDate.classList.add("card-date")
    cardText.classList.add("card-text")
    cardFullLink.classList.add("card-full-link")

    if (elements.length > 5) {
        cardTitle.innerHTML = "<a href='"+elements[5]+"'>"+elements[0]+"</a>"
    } else {
        cardTitle.innerText = elements[0]
    }

    if (elements.length > 5) {
        cardDate.innerText = elements[4]
    } else {
        cardDate.innerText = elements[1]
    }
    
    cardText.innerHTML = elements[2]

    cardFullLink.innerText = "Learn More"
    cardFullLink.addEventListener('click', function() { showFull(elements[3]) })
    
    cardContainer.append(cardTitle)
    cardContainer.append(cardDate)
    cardContainer.append(cardText)
    cardContainer.append(cardFullLink)

    cardContainer.classList.add("fade-in")
    
    return cardContainer
}

// constructs and renders grid-based page using an array of elements
function constructGrid(x) {
    let numberOfCardElements = 0 // number of elements on each card
    let list = [] // list with all elements for all the cards
    let numberOfCards = 0 // how many cards to display

    if (x === "P") {
        list = projectsList
        numberOfCardElements = 7
        numberOfCards = list.length / numberOfCardElements
    } else {
        list = articlesList
        numberOfCardElements = 5
        numberOfCards = list.length / numberOfCardElements
    }

    const gridContainer = document.createElement("div")
    gridContainer.classList.add("grid-container")

    for (let i=0; i<numberOfCards; i++) {
        let cardIndex = i*numberOfCardElements
        let cardData = []
        for (let j=cardIndex; j<cardIndex+numberOfCardElements; j++) {
            cardData.push(list[j])
        }
        const card = constructCard(cardData)

        gridContainer.append(card)
    }

    paper.append(gridContainer)
}

// displays Welcome, Articles, or Projects pages ("W", "A", "P")
function showPage(x) {
    if (currentPage === x) {
        return
    }
    paper.innerHTML = ""
    switch (x) {
        case "W":
            currentPage = x
            constructPage(welcomePage)
            break;
        case "A":
            currentPage = x
            constructGrid(x)
            break;

        case "P":
            currentPage = x
            constructGrid(x)
            break;
        default:
            break;
    }
}

// On page load 
window.onscroll = function() { checkOffset() };
loadLists()
constructPage(welcomePage)