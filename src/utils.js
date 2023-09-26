// Функция для отрисовки игрока и монстров
function render(player, monsters) {
    player.render()
    monsters.forEach(monster => {monster.render()})
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