const ussAssembly = document.querySelector('.us')
const alien = document.querySelector('.them')

// hull = hp 
// let ussAssembly = {
//     hp : 20,
//     firepower : 0,
//     accuracy : .7
// }


const legend = () => {
    let playerScore = 100
    let alienScore = 100

    console.log('battle started')

    let command = prompt('Ready to [A]ttack? or [R]etreat?')
        if(command === 'A'){
            let target = document.querySelector('ufo')

            let explosion = document.createElement('img')
            explosion.setAttribute('src' , 'https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif')

            let currentScore = document.querySelector('.hundred').innerHTML="";
            // currentScore.style.backgroundColor = "black";

            let halfLife = document.querySelector('.fifty').innerHTML="50%";

            target.replaceWith(explosion)
        } else {
            console.log('PLayer has retreated! YOU LOSE!')
        }
}

const playerAttack = () => {
    
    let us = document.querySelector('.ship')

    ship.classList.toggle('.startAlienAttack')
}


// our SHIP
// let ussAssembly = {
//     dodge: function(){

//     }
// }


// const battle = () => {


    
// }


// let alienMob = []
