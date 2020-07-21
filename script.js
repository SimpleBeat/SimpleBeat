const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

const paper = document.getElementById("myPaper");

// Helper functions
function checkOffset() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
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
createHelloDiv()