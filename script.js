function getRandomItemIndex(array) {
    return Math.floor(Math.random() * array.length)
}

const items = document.querySelectorAll(".item")
const zombieImg = document.createElement("img")
zombieImg.src = "images/zombie.png"
const missCounter = document.getElementById("miss-counter")
const soundBtn = document.getElementById("sound-btn")
const bu = document.getElementById("sound-bu")
const hitImg = document.createElement("img")
hitImg.src = "images/blood.png"
const hitCounter = document.getElementById("hit-counter")
const shot = document.getElementById("sound-shot")
const startBtn = document.getElementById("start-btn")

let hit = false
let start = false
let randomIndex;
let interval;


// TODO перемещение зомби
function startGame() {

    interval = setInterval(function () {
        if (hit === true) {
            hit = false
        } else {
            missCounter.innerHTML++
        }
        hitImg.remove()
        randomIndex = getRandomItemIndex(items)
        items[randomIndex].append(zombieImg)
    }, 2000)
}


// TODO включение/выключение фонового звука
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


// TODO включение/выключение
startBtn.onclick = function () {
    if (start === false) {
        start = true
        randomIndex = getRandomItemIndex(items)
        // TODO первичное размещение зомби
        items[randomIndex].append(zombieImg)
        // TODO попадание в зомби
        zombieImg.onclick = function () {
            hit = true
            hitCounter.innerHTML++;
            shot.currentTime = 0
            shot.play()
            zombieImg.remove()
            items[randomIndex].append(hitImg)
        }
        startGame()
        startBtn.innerHTML = "STOP"
    } else {
        start = false
        zombieImg.onclick = null
        zombieImg.remove()
        hitImg.remove()
        missCounter.innerHTML = 0
        hitCounter.innerHTML = 0
        clearInterval(interval)
        startBtn.innerHTML = "START"
    }
}
