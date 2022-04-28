const pacMan = document.querySelector('.pacman');
let velocity = 1;

// stored function logic for each direction
const positionLogic =  {
    'up': (currPos) => {
        pacMan.style.moveUp = `${currPos[1] - velocity}px`;
        pacMan.classList.add('face-up');
        pacMan.classList.remove('face-down');
        pacMan.classList.remove('face-left');
        pacMan.classList.remove('face-right');
    },
    'down': (currPos) => {
        pacMan.style.moveDown = `${currPos[1] + velocity}px`;
        pacMan.classList.remove('face-up');
        pacMan.classList.add('face-down');
        pacMan.classList.remove('face-left');
        pacMan.classList.remove('face-right');
    },
    'left': (currPos) => {
        pacMan.style.moveLeft = `${currPos[0] - velocity}px`;
        pacMan.classList.remove('face-up');
        pacMan.classList.remove('face-down');
        pacMan.classList.add('face-left');
        pacMan.classList.remove('face-right');
    },
    'right': (currPos) => {
        pacMan.style.moveDown = `${currPos[0] + velocity}px`;
        pacMan.classList.remove('face-up');
        pacMan.classList.remove('face-down');
        pacMan.classList.remove('face-left');
        pacMan.classList.add('face-right');
    }
}

const timeouts = [];
const clearTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
}

const downBtn = (btn, action, interval) => {
var t;
var repeat = function() {
   action();
   t = setTimeout(repeat, interval)
   timeouts.push(t);
 }
//    repeat()
}
const updatePosition = (element) => {
    clearTimeouts();

    let className = element.className;
    let movementFunc = positionLogic[className];
    downBtn(element, () => {
        let currPos = currentPosition();
        movementFunc(currPos)
    }, 10);
    currentPosition()
}