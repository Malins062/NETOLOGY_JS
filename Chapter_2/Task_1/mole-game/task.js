const killedToWin = 10;
const missesToLoss = 5;

var countMisses;
var killedMoles;

const deads = document.getElementById('dead');
const losses = document.getElementById('lost');

function restart() {
    countMisses = 0;
    killedMoles = 0;
    deads.textContent = killedMoles;
    losses.textContent = countMisses;
}

restart();

for (i = 1; i <= 9; i++) {
    const hole = document.getElementById('hole'+i);
    hole.onclick = () => {
        if (hole.classList.contains( 'hole_has-mole' )) {
            killedMoles++;
            deads.textContent = killedMoles;

            if (killedMoles == killedToWin) {
                alert(`ПОЗДРАВЛЯЮ!!! Убито кротов - ${killedMoles}. ВЫ ВЫИГРАЛИ! ;-)`);
                restart();
            }
        } else {
            countMisses++;
            losses.textContent = countMisses;

            if (countMisses == missesToLoss) {
                alert(`Промахов - ${countMisses}. ВЫ ПРОИГРАЛИ :-(`);
                restart();
            }
        }
    }
}
