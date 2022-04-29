const ussAssembly = document.querySelector('.ship')
const alien = document.querySelector('.ufo')
const score = document.querySelector('.legend')


const legend = () => {
        let playerScore = 100
        let alienScore = 100
    
        // console.log('battle started')

}

const playerAttack = () => {
    let ussAssembly = document.querySelector('.ship')
    ussAssembly.classList.toggle('.startAlienAttack')
    
    let command = prompt('Press [A]ttack? or [R]etreat?')
            if(command === 'A'){
                let target = document.querySelector('alien')
                console.log('PLAYER HAS ATTACKED!')
            }  else if (command === 'R') {
                console.log('PLAYER HAS RETREATED!')
            } 
            else {
                console.log('Please select a move!')
            }

}

const alienAttack = ()=> {
    let alien = document.querySelector('.alien')
    alien.classList.toggle('.startPlayerAttack')

    let command = prompt('Press [A]ttack? or [R]etreat?')
            if(command === 'A'){
                let target = document.querySelector('ussAssembly')
                console.log('ALIEN HAS ATTACKED!')
    
            } else if (command === 'R') {
                console.log('ALIEN HAS RETREATED!')
            } 
            else {
                console.log('Please select a move!')
            }

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

// our SHIP
// let ussAssembly = {
//     dodge: function(){

//     }
// }


// const battle = () => {


    
// }


// let alienMob = []
