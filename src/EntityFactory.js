// Фабрика для создания существ
class EntityFactory {
    createPlayer(name) {
        return new Player(name, health, damage, defense, healsCount, point);
    }

    createMonster(name, type) {
        return new Monster(name, health, damage, defense, healsCount, point);
    }
}