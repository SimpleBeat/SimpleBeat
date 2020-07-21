const header = document.getElementById("myHeader")
const sticky = header.offsetTop

const paper = document.getElementById("myPaper")
let currentPage = "W"

const articlesList = []; // list of all articles from articles.txt
const projectsList = []; // list of all projects from projects.txt

const welcomeLink = document.getElementById("welcome")
const projectsLink = document.getElementById("projects")
const articlesLink = document.getElementById("articles")

const welcomePage = [
    "Welcome to SimpleBeat!",
    "<div class='article-image to-left'><img src='img/ilya.jpg' alt='ilya avatar'></div>",
    "<p>I am a web developer with experience in design and mobile software engineering.</p>",
    "<p>I've been building, deploying, and maintaining websites for over <b>20 years.</b></p>"
]

welcomeLink.addEventListener("click", function() { showPage("W") })
projectsLink.addEventListener("click", function() { showPage("P") })
articlesLink.addEventListener("click", function() { showPage("A") })

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

// loads a list of all articles from a text file
function loadArticlesList() {

}

// loads a list of all projects from a text file
function loadProjectsList() {

}

// constructs and renders page using an array of elements
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
            break;

        case "P":
            currentPage = x
            break;
        default:
            break;
    }
}

function createHelloDiv() {
    const article = document.createElement("div")
    const title = document.createElement("div")
    const text = document.createElement("div")
    const divider = document.createElement("div")
    const image = document.createElement("div")
    const pic = document.createElement("img")
    article.append(title)
    article.append(image)
    article.append(text)
    article.append(divider)
    paper.append(article)
    article.classList.add("article")
    title.classList.add("article-title")
    text.classList.add("article-body")
    divider.classList.add("divider")
    image.classList.add("article-image")
    image.classList.add("to-left")
    pic.src = "img/ilya.jpg"
    image.append(pic)
    text.innerHTML = "Hello! My name is Ilya, I am a web developer with a <b>vast</b> experience in designing, building, deploying, and maintaining websites for 15+ years."
    title.innerText = "Welcome to SimpleBeat!"
    
}

// On page load 
window.onscroll = function() { checkOffset() };

loadArticlesList()
loadProjectsList()

constructPage(welcomePage)