//Вывод информации об игре
function informing(text) {
    const info = document.getElementById("info")
    const new_info = document.createElement("p")
    new_info.innerText = text
    info.appendChild(new_info)
}

// Отключение кнопок
function turnOffButtons() {
    const buttons = document.getElementsByTagName("button")
    Array.from(buttons).forEach(button => {
        button.setAttribute("disabled", "")
    })
}

// Функция для отрисовки игрока и монстров
function render(player, monsters) {
    player.render()
    monsters.forEach(monster => {monster.render()})
    if (!player.isAlive()) {
        const youDied = document.createElement('div')
        youDied.innerHTML = '<p>YOU DIED</p><a href=".">Начать заново</a>'
        youDied.classList.add("you-died")
        document.body.appendChild(youDied)
        turnOffButtons()
    }
}


// Функция для нахождения ближайшего живого монстра среди всех монстров
function findNearestMonster(player, monsters) {
    let nearestMonster = null;
    let nearestDistance = Infinity;

    monsters.map((monster) => {
        if (monster.isAlive()) {
            const dist = player.distance(monster);

            if (dist < nearestDistance) {
                nearestMonster = monster;
                nearestDistance = dist;
            }
        }
    });

    return nearestMonster;
}