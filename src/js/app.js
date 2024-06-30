import Game from "./gameItemClass"
import Enemy from "./enemyClass";

document.addEventListener("DOMContentLoaded",() => {
    let enemu = new Enemy();
    let counterItem = document.querySelector(".mole_counter");
    let counter = 0;
    let resultWindow = document.querySelector(".lose_window");
    let moleCounter = 0;


    let game = new Game(document.querySelector(".game_container"), document.querySelectorAll(".game_item"));
    game._item.addEventListener("click", (event) => {
        console.log(event.target)

        if((event.target.firstElementChild === enemu._enemy) || (event.target === enemu._enemy)){
            counter++;
            counterItem.textContent = counter;
        } else {
            moleCounter++;
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
        game.takeCash(enemu.moveEnemy(game._cels, game.cash));
    }, 1000)
})