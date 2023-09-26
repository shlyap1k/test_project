// Базовый класс для существ
class Entity {
    constructor(name, health, damage, defense, healsCount, point, type) {
        this.name = name;
        this.health = health;
        this.max_health = health;
        this.damage = damage;
        this.defense = defense;
        this.healsCount = healsCount;
        this.point = point;
        this.type = type
        this.entityElement = document.createElement('div');
        this.entityElement.classList.add('entity');
        this.entityElement.classList.add(this.type); // Добавляем класс monster или player
        this.entityElement.setAttribute('id', this.name);
        document.body.appendChild(this.entityElement);
        this.render();

    }

    move(dx, dy) {
        if (this.isAlive()) {
            this.point[0] += dx
            this.point[1] += dy
        }
    }

    heal() {
        if (this.isAlive() && this.healsCount > 0) {
            this.health += this.max_health * 0.3
            if (this.health > this.max_health) {
                this.health = this.max_health
            }
            this.healsCount--;
        }
    }

    isAlive() {
        if ( this.health === 0 ){
            return false
        }
        return true
    }

    die () {
        this.entityElement.classList.add('died')
        informing(`${this.name} умирает`)
    }

    distance(entity) {
        if (this.isAlive())
            return Math.sqrt((entity.point[0] - this.point[0]) ** 2 + (entity.point[1] - this.point[1]) ** 2)
        else
            return Infinity
    }

    getDamage(damage) {
        if (damage < 0) {
            throw new Error("Damage cannot be negative");
        }
        this.health -= damage;
        if (this.health <= 0) {
            this.die()
            this.health = 0;
        }
    }

    dice(min, max, attackModifier) {
        let d
        for (let i = 0; i < attackModifier; i++) {
            if ((Math.random() * (max - min) + min) >= 5)
                return true
        }
        return false
    }

    attack(entity) {
        if (this.distance(entity) <= 100) {
            let attackModifier = this.damage - entity.defense + 1;
            attackModifier = attackModifier >= 1 ? attackModifier : 1.0
            informing(`${this.name} атакует ${entity.name}. Модификатор атаки: ${attackModifier}`)
            let d = this.dice(1, 6, attackModifier)
            console.log(d)
            if (d) {
                informing(`${this.name} удачно бросает игральный кубик и наносит ${this.damage} урон  ${entity.name}.`)
                entity.getDamage(this.damage)
            } else {
                informing(`${this.name} неудачно бросает игральный кубик и не наносит урона по ${entity.name}.`)
            }
        }
    }

    render() {
        this.entityElement.innerHTML = ''
        let nameElement = document.createElement('div');
        nameElement.innerText = `name: ${this.name}`
        let hpElement = document.createElement('div');
        hpElement.innerText = `hp: ${this.health} / ${this.max_health}`
        let defenseElement = document.createElement('div');
        defenseElement.innerText = `defense: ${this.defense}`
        let damageElement = document.createElement('div');
        damageElement.innerText = `damage: ${this.damage}`
        let healsCountElement = document.createElement('div');
        healsCountElement.innerText = `healsCount: ${this.healsCount}`
        this.entityElement.appendChild(nameElement)
        this.entityElement.appendChild(hpElement)
        this.entityElement.appendChild(healsCountElement)
        this.entityElement.appendChild(defenseElement)
        this.entityElement.appendChild(damageElement)
        this.entityElement.setAttribute('style', `left: ${this.point[0]}px; top: ${this.point[1]}px;`)
    }
}