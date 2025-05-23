const items = document.querySelectorAll('.item');
const zombieImg = document.createElement('img');
zombieImg.src = 'images/zombie.png';

function getRandomItemIndex(array) {
    return Math.floor(Math.random() * array.length);
}

let randomIndex = getRandomItemIndex(items);
items[randomIndex].append(zombieImg);
setInterval(function () {
    randomIndex = getRandomItemIndex(items);
    items[randomIndex].append(zombieImg);
}, 2000)

const soundBtn = document.getElementById('sound-btn');
const bu = document.getElementById('sound-bu');
soundBtn.onclick = function () {
    if(bu.currentTime) {
        bu.pause()
        bu.currentTime = 0;
        soundBtn.innerHTML = 'SOUND ON'
    } else {
        bu.play()
        soundBtn.innerHTML = 'SOUND OFF'
    }
}