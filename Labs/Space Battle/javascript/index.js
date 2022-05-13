const ussAssembly = document.querySelector('.ship')
const alien = document.querySelector('.ufo')
const score = document.querySelector('.legend')
let playerScore = 0
let alienScore = 0

function legend() {
    let ussAssembly = {
        hp : 20,
        firepower : 0,
        accuracy : .7
    }

    let alien = {
        hp : 10,
        firepower : 1,
        accuracy : .5
    }
}

// const legend = () => {
      
//         // if (var i = 0 ; i < score.length ; i ++ ) {
//         //     let playerAttack = playerScore[i]
//         //     let alienAttack = alienScore[i]
//         // }

// }


// FUNCTION FOR PLAYER ATTACK 

const playerAttack = () => {
    let ussAssembly = document.querySelector('.ship')
    ussAssembly.classList.toggle('startAlienAttack')
    
    let command = prompt('Press [A]ttack? or [R]etreat?')
            if(command === 'A' ){
                let target = document.querySelector('alien')
                playerScore += 100
                document.querySelector('.playerNum').innerHTML = playerScore
                console.log('PLAYER HAS ATTACKED!')
            }  else if (command === 'R' ) {
                playerScore -= 0
                document.querySelector('.playerNum').innerHTML = playerScore
                console.log('PLAYER HAS RETREATED!')
            } 
            else {
                alert('Please select a move!')
            }

            legend()
}

// FUNCTION FOR ALIEN ATTACK 

const alienAttack = ()=> {
    let alien = document.querySelector('.alien')
    alien.classList.toggle('startPlayerAttack')
    
  

    let command = prompt('Press [A]ttack? or [R]etreat?')
            if(command === 'A' ){
                let target = document.querySelector('ussAssembly')
                alienScore += 100
                document.querySelector('.alienNum').innerHTML = alienScore
                console.log('ALIEN HAS ATTACKED!')
    
            } else if (command === 'R') {
                alienScore -= 0
                document.querySelector('.alienNum').innerHTML = alienScore
                console.log('ALIEN HAS RETREATED!')
            } 
            else {
                alert('Please select a move!')
            }
            legend()
}

// hull = hp 
// let ussAssembly = {
//     hp : 20,
//     firepower : 0,
//     accuracy : .7
// }


// 

//     let command = prompt('Press [A]ttack? or [R]etreat?')
//         if(command === 'A'){
//             let target = document.querySelector('alien')

//             let explosion = document.createElement('img')
//             explosion.setAttribute('src' , 'https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif')

//             let currentScore = document.querySelector('.hundred').innerHTML="";
//             // halfLife.style.backgroundColor = "black";

//             let halfLife = document.querySelector('.fifty').innerHTML="50%";
//             // document.halfLife.style.backgroundColor = black;

//             let noHealth = document.querySelector('.noHealth').innerHTML="0%";
//             target.replaceWith(explosion)
//         } else {
//             console.log('PLayer has retreated! YOU LOSE!')
//         }
// }

// const playerAttack = () => {
    
//     let us = document.querySelector('.ship')

//     ship.classList.toggle('.startAlienAttack')
// }

// const alienAttack = () => {
    
//     let us = document.querySelector('.alien')

//     ship.classList.toggle('.startplayerAttack')
// }

