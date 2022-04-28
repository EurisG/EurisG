const showLogin = () => {
   let login_btn = document.querySelector('.colorLink')
    let loginAnswer= prompt("Enter Email for Log In")

    let screen = document.querySelector('.screen')

    screen.innerHTML = loginAnswer

    // conditionals 

    if(loginAnswer.includes("@") && loginAnswer.includes(".")){
        screen.innerHTML = loginAnswer
    } else {
        screen.innerHTML = "Please make sure email is correct!"
    }
}