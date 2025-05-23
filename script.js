const items = document.querySelectorAll('.item');
const zombieImg = document.createElement('img');
zombieImg.src = 'images/zombie.png';

function getRandomItemIndex(array) {
    return Math.floor(Math.random() * array.length);
}

let randomIndex = getRandomItemIndex(zombieImg);