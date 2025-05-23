const items = document.querySelectorAll(".item");
const zombieImg = document.createElement("img");
zombieImg.src = "images/zombie.png";
const missCounter = document.getElementById("miss-counter");
let hit = false;
let zombieVisible = true; // Добавляем флаг видимости зомби

function getRandomItemIndex(array) {
    return Math.floor(Math.random() * array.length);
}

let randomIndex = getRandomItemIndex(items);
items[randomIndex].append(zombieImg);

setInterval(function () {
    // Если зомби был убит (hit = true), сбрасываем флаг и скрываем зомби
    if(hit === true) {
        hit = false;
        zombieVisible = false;
        zombieImg.remove();
        items[randomIndex].append(hitImg);
    }
    // Если зомби не был убит и он виден - увеличиваем счетчик промахов
    else if(zombieVisible) {
        missCounter.innerHTML++;
        zombieImg.remove();
    }

    // Показываем нового зомби
    randomIndex = getRandomItemIndex(items);
    items[randomIndex].append(zombieImg);
    zombieVisible = true; // Устанавливаем флаг, что зомби виден
}, 2000);

// Остальной код остается без изменений
const soundBtn = document.getElementById("sound-btn");
const bu = document.getElementById("sound-bu");

soundBtn.onclick = function () {
    if (bu.currentTime !== 0) {
        bu.pause();
        bu.currentTime = 0;
        soundBtn.innerHTML = "SOUND ON";
    } else {
        bu.play();
        soundBtn.innerHTML = "SOUND OFF";
    }
}

const hitImg = document.createElement("img");
hitImg.src = "images/blood.png";
const hitCounter = document.getElementById("hit-counter");
const shot = document.getElementById("sound-shot");

zombieImg.onclick = function () {
    hit = true;
    hitCounter.innerHTML++;
    shot.currentTime = 0;
    shot.play();
    zombieVisible = false; // Зомби убит, больше не виден
    zombieImg.remove();
    items[randomIndex].append(hitImg);
}