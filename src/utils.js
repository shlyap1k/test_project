// Функция для отрисовки игрока и монстров
function render(player, monsters) {
    player.render()
    monsters.forEach(monster => {monster.render()})
    if (!player.isAlive()) {
        const youDied = document.createElement('div')
        youDied.innerHTML = '<p>YOU DIED</p><a href=".">Начать заново</a>'
        youDied.classList.add("you-died")
        document.body.appendChild(youDied)
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