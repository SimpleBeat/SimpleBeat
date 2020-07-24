let counters = {
    'face': 0
}
const faceFinderElement = document.getElementById("faceFinder")
faceFinderElement.addEventListener('click', function() { showScreenShot('face') })

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