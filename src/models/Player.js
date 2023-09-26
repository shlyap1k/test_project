// Класс для игроков
class Player extends Entity {
    constructor(name, health, damage, defense, healsCount, point) {
        super(name, health, damage, defense, healsCount, point, 'player');
    }
}