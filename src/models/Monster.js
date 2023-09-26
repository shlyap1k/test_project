// Класс для монстров
class Monster extends Entity {
    constructor(name, health, damage, defense, healsCount, point) {
        super(name, health, damage, defense, healsCount, point, 'monster');
    }
}