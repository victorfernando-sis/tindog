
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
        <div class="dog-card" style="background-image: url('${avatar}')">
        <img class="badge" id="like-badge" src="/images/badge-like.png" />
        <img class="badge" id="dislike-badge" src="/images/badge-nope.png" />
            <div class="dog-info">
                <h2> <span class="dog-name"> ${name}</span>, 
                    <span class="dog-age">${age}</span></h2>
                <p class="dog-bio">${bio}</p>
            </div>
        </div>
        `
    }
}

export default Dog