import {Entity} from "./Entity.js";

// Класс для игроков
export class Player extends Entity {
    constructor(name, health, damage, defense, healsCount, point) {
        super(name, health, damage, defense, healsCount, point, 'player');
    }
}