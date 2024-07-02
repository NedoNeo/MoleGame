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
    let loseInterval;
    let d = 0;


    let game = new Game(document.querySelector(".game_container"), document.querySelectorAll(".game_item"));
    game._item.addEventListener("click", (event) => {
        clearInterval(loseInterval);
        

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
            // resultWindow.firstElementChild.textContent = 'Вы победили!';
            // resultWindow.classList.toggle("hidden");
        } else if(moleCounter === 5) {
            // resultWindow.firstElementChild.textContent = 'Вы проиграли!';
            // resultWindow.classList.toggle("hidden");
            alert("Вы проиграли!");
            counter = 0;
            moleCounter = 0;
            counterItem.textContent = counter;
        }

    })
    setInterval(()=> {
        loseInterval = setInterval(() => {
            if(moleCounter >= 5){
                clearInterval(loseInterval);
                alert("Вы проиграли!");
                counter = 0;
                moleCounter = 0;
                counterItem.textContent = counter;
            }  else {
                clearInterval(loseInterval);
                d++
                moleCounter++;
                console.log(d)
            }
        },1200)
        game.takeCash(enemu.moveEnemy(game._cels, game.cash));
    }, 1000)
})