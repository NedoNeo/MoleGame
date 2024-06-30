 export default class Game {
    constructor(item) {
       this._item = item; 
       this._cels = this._item.querySelectorAll(".game_item");
       this.cash ;

    }

    // moveEnemy(enemy) {
    //     let min = Math.ceil(0);
    //     let max = Math.floor(this._cels.length - 1);
    //     let result = Math.floor(Math.random() * (max - min + 1)) + min;
        
    //     if (result === this.cash) {
    //         this.moveEnemy(enemy);
    //     } else {
    //         this._cels[result].appendChild(enemy);
    //         this.cash = result;
    //     }

        

    // }

    takeCash(newCash)  {
        this.cash = newCash;
    }
    
}