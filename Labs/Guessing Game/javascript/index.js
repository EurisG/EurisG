let scoreBoard = 0


const toggleCardOne = () => {

    // let hand = document.querySelector('.one')
    // hand.classList.toggle('')

    let answer = document.getElementsByClassName('.answer-Display')

    let riddleOne = prompt(' 2 + 2 = ? ')

    if(riddleOne === '4') {
        alert(answer.innerHTML = ' CORRECT ! ')
        scoreBoard += 1
        document.querySelector('.points').innerHTML = scoreBoard
    } else {
        alert(answer.innerHTML = 'Answer Incorrect ! ')
        scoreBoard -= 1
        document.querySelector('.points').innerHTML = scoreBoard
    } 
}


const toggleCardTwo =  () => {
    let answer = document.getElementsByClassName('.answer-Display')

    let riddleTwo = prompt(' 5 * 5 = ? ')

    if(riddleTwo === '25') {
       alert(answer.innerHTML = ' CORRECT ! ')
        scoreBoard += 1
        document.querySelector('.points').innerHTML = scoreBoard
    } else {
        alert(answer.innerHTML = 'Answer Incorrect ! ')
        scoreBoard -= 1
        document.querySelector('.points').innerHTML = scoreBoard
    }
}

const toggleCardThree =  () => {
    let answer = document.getElementsByClassName('.answer-Display')

    let riddleThree = prompt('  which island is known for the Big Apple? ')

    if(riddleThree === 'manhattan' || 'Manhattan') {
        alert(answer.innerHTML = ' CORRECT ! ')
        scoreBoard += 1
        document.querySelector('.points').innerHTML = scoreBoard
    } else {
        alert(answer.innerHTML = 'Answer Incorrect ! ')
        scoreBoard -= 1
        document.querySelector('.points').innerHTML = scoreBoard
    }
}