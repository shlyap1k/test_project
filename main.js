// Использование фабрики
const entityFactory = new EntityFactory();
const player1 = entityFactory.createPlayer("Ivan", health=100, damage=27, defense=15, healsCount=4, point=[50, 50]);
const monsters = [];
monsters.push(entityFactory.createMonster("Monster1", health=100, damage=15, defense=15, healsCount=4, point=[150, 150]));
monsters.push(entityFactory.createMonster("Monster2", health=100, damage=30, defense=1, healsCount=4, point=[250, 250]));
monsters.push(entityFactory.createMonster("Monster3", health=100, damage=12, defense=30, healsCount=4, point=[450, 350]));
