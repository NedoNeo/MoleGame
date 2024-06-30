export default class Enemy {
    constructor() {
        this._enemy = document.createElement("img");
        this._enemy.setAttribute("src","./images/goblin.png");
        this._enemy.classList.add("image");
    }

    moveEnemy(cels, cash) {
        let min = Math.ceil(0);
        let max = Math.floor(cels.length - 1);
        let result = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if (result === cash) {
            this.moveEnemy(cels, cash);
        } else {
            cels[result].appendChild(this._enemy);
            return result
        }

        

    }
}