import {Player} from "./models/Player.js";
import {Monster} from "./models/Monster.js";

// Фабрика для создания существ
export default class EntityFactory {
    createPlayer(name, health, damage, defense, healsCount, point) {
        return new Player(name, health, damage, defense, healsCount, point);
    }

    createMonster(name, health, damage, defense, healsCount, point) {
        return new Monster(name, health, damage, defense, healsCount, point);
    }
}