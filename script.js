const items = document.querySelectorAll(".item")
const zombieImg = document.createElement("img")
zombieImg.src = "images/zombie.png"
const missCounter = document.getElementById("miss-counter")
let hit = false

function getRandomItemIndex(array) {
    return Math.floor(Math.random() * array.length)
}

let randomIndex = getRandomItemIndex(items)
items[randomIndex].append(zombieImg)

setInterval(function () {
    if(hit === true){
        hit = false
    } else {
        missCounter.innerHTML++
    }
    hitImg.remove()
    randomIndex = getRandomItemIndex(items)
    items[randomIndex].append(zombieImg)
}, 2000)


const soundBtn = document.getElementById("sound-btn")
const bu = document.getElementById("sound-bu")

soundBtn.onclick = function (params) {
    if (bu.currentTime !== 0) {
        bu.pause()
        bu.currentTime = 0
        soundBtn.innerHTML = "SOUND ON"
    } else {
        bu.play()
        soundBtn.innerHTML = "SOUND OFF"
    }
}

const hitImg = document.createElement("img")
hitImg.src = "images/blood.png"
const hitCounter = document.getElementById("hit-counter")
const shot = document.getElementById("sound-shot")

zombieImg.onclick = function () {
    hit = true
    hitCounter.innerHTML++;
    shot.currentTime = 0
    shot.play()
    zombieImg.remove()
    items[randomIndex].append(hitImg)
}
