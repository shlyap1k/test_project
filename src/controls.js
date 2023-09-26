const attackButton = document.getElementById("attack-button");
const healButton = document.getElementById("heal-button");
const upButton =  document.getElementById("up-button");
const downButton =  document.getElementById("down-button");
const leftButton =  document.getElementById("left-button");
const rightButton =  document.getElementById("right-button");

healButton.addEventListener("click", function () {
    player1.heal()
    render(player1, monsters)
});
attackButton.addEventListener("click", function () {
    let monster = findNearestMonster(player1, monsters)
    if (monster) {
        player1.attack(monster)
        if (monster.isAlive()) {
            monster.attack(player1)
        }
    }
    render(player1, monsters)
});
upButton.addEventListener("click", function () {
    player1.move(0, -30)
    render(player1, monsters)
});
downButton.addEventListener("click", function () {
    player1.move(0, 30)
    render(player1, monsters)
});
rightButton.addEventListener("click", function () {
    player1.move(30, 0)
    render(player1, monsters)
});
leftButton.addEventListener("click", function () {
    player1.move(-30, 0)
    render(player1, monsters)
});