import data from '/data.js'
import Dog from './Dog.js'

let dogsArray = data

const getNextDogProfile = () => new Dog(dogsArray.shift())

const getEndOfListHtml = () => {
    return `
        <div class='endlist-msg-container'>
            <img class='endlist-img' src="/images/dog-draw.jpg" alt="Dog drawing" />
            <h2 class='endlist-title'>Ops... That's the end of the list.</h2>
            <p class='endlist-subtitle'><strong>Come back in a minute.</strong></p>
        </div>
    `
}

export {getNextDogProfile, getEndOfListHtml}