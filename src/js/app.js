import Game from "./gameItemClass"
import Enemy from "./enemyClass";

document.addEventListener("DOMContentLoaded",() => {

    for(let i = 0; i < 16; i++) {
        let gameItem = document.createElement("div");
        gameItem.classList.add("game_item");

        document.querySelector(".game_container").appendChild(gameItem);
    }

    let enemu = new Enemy();
    let counterItem = document.querySelector(".mole_counter");
    let counter = 0;
    let loseCounter = document.querySelector(".mole_win")
    let moleCounter = 0;
    let lastClisk = false;
   


    let game = new Game(document.querySelector(".game_container"), document.querySelectorAll(".game_item"));

    enemu.moveEnemy(game._cels, game.cash)

    game._item.addEventListener("click", (event) => {
        lastClisk = true;
        

        if((event.target.firstElementChild === enemu._enemy) || (event.target === enemu._enemy)){
            counter++;
            counterItem.textContent = counter;
        } else {
            moleCounter++;
            loseCounter.textContent = moleCounter;
        }

        if(counter === 5) {
            alert("Вы победили!")
            counter = 0;
            moleCounter = 0;
            counterItem.textContent = counter;
            loseCounter.textContent = moleCounter;
            
        } else if(moleCounter === 5) {
           
            alert("Вы проиграли!");
            counter = 0;
            moleCounter = 0;
            counterItem.textContent = counter;
            loseCounter.textContent = moleCounter;
            
        }

    })
    setInterval( ()=> {
        let newPromise = new Promise(resolve => {
            setTimeout( ()=>{
                if(!lastClisk) {
                    moleCounter++;
                    loseCounter.textContent = moleCounter;
                } 
                if(moleCounter === 5) {
                   
                    alert("Вы проиграли!");
                    counter = 0;
                    moleCounter = 0;
                    counterItem.textContent = counter;
                    loseCounter.textContent = moleCounter;
                    
                }
                resolve()
            },500)
        })

        newPromise.then(() => {
            lastClisk = false;
            game.takeCash(enemu.moveEnemy(game._cels, game.cash));
        })
    }, 1000)
})