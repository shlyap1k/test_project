import EntityFactory from "./src/EntityFactory.js";
import {findNearestMonster, render} from "./src/utils.js";
// Использование фабрики
const entityFactory = new EntityFactory();
const player1 = entityFactory.createPlayer("Ivan", 100, 27, 15, 4, [50, 50]);
const monsters = [];
monsters.push(entityFactory.createMonster("Monster1", 100, 15, 15, 4, [150, 150]));
monsters.push(entityFactory.createMonster("Monster2", 100, 30, 1, 4, [250, 250]));
monsters.push(entityFactory.createMonster("Monster3", 100, 12, 30, 4, [450, 350]));

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