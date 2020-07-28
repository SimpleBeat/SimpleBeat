let counters = {
    'face': 0,
    'robo': 0,
    'acie': 0,
    'teatr': 0
}
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