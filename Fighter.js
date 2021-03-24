class Fighter {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.damage = 15;
    }

    attack(fighter){
        let dmg = this.getDamage();
        fighter.takeHit(dmg);
        alert(this.name + ' attack '+fighter.name +' with '+dmg);
    }

    takeHit(dmg){
        this.decreaseHP(dmg);
        if(this.hp <= 0){
            alert(this.name + ' lose!');
        }
    }

    decreaseHP(dmg){
        this.hp -= dmg;
    }

    getDamage(){
        let min = this.damage - 7;
        let max = this.damage + 7;
        let dmg = Math.floor(Math.random()*(max-min))+min;
        return dmg;
    }
}
