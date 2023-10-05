// Класс для монстров
import {Entity} from "./Entity.js";

export class Monster extends Entity {
    constructor(name, health, damage, defense, healsCount, point) {
        super(name, health, damage, defense, healsCount, point, 'monster');
    }
}