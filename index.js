import Dog from './Dog.js'
import data from '/data.js'
import { getNextDogProfile, getEndOfListHtml } from '/utils.js'

let dogsArray = data
let dog = {}


function render() {
    dog = getNextDogProfile()
    
    if (dog.name) {
        document.getElementById('main-section').innerHTML = dog.getDogHtml()
        document.getElementById('actions-container').classList.remove('disabled')
    } else {
        document.getElementById('main').innerHTML = getEndOfListHtml()
    }
}

function handleAction(event) {
    event = event || window.event;
    dog.hasBeenSwiped = true
    document.getElementById('actions-container').classList.add('disabled')

    if (event.currentTarget.id === "like-btn") {
        dog.hasBeenLiked = true
        document.getElementById('like-badge').style.display = "block"
    } else {
        dog.hasBeenLiked = false
        document.getElementById('dislike-badge').style.display = "block"
    }

    setTimeout(() => { render() }, 1000)
}

document.getElementById('like-btn').addEventListener('click', handleAction)
document.getElementById('dislike-btn').addEventListener('click', handleAction)

render()



