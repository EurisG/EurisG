const attackMario = () => {
    let shroomDude = document.querySelector('.goom')
    shroomDude.classList.toggle('initiateAttack')
}

const jump = () => {
    let mario = document.querySelector('.plumber')

    mario.classList.toggle('bunnies')
    
    addPoint()

}

let score = 0 

const addPoint = () => {
let ticker = document.querySelector('.point')
ticker.innerHTML = score += 1
}