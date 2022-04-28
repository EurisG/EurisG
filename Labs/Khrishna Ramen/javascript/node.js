// let key = 'Enter your API Key In Here'


const toggleElement = () => {
  // 1. We want to Change Color of GwenTxt
  let skreen = document.querySelector('.hidden')

  skreen.classList.toggle('showScreen')
}

const createReservation = () => {
  let resConfirmed = prompt('Do you have a reservation ? ')
  if (resConfirmed === 'yes') {
    console.log('Cool Reservation Booked!')

    let hiddenDiv = document.querySelector('.peekaboo')

    hiddenDiv.innerHTML = 'Reservation Booked! '
  } else {
    alert('You Need To Make A reservation')
  }
}

const julian = () => {
  let noodle = document.querySelector('.mainTitle')
  noodle.classList.toggle('wexler2')
}

const go = () => {
  setInterval(() => {
    console.log('Uhhh')
  }, 3000)
}




const meetTeam = () => {
    // Returns a promise
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // This is a promise in readable stream
      .then((json) => {
        let info = json; // This is the data as an array
        console.log(info);
  
        // Loop over all the elements of the array
        info.forEach((element) => {
          // Create a new div for each element of the array
          let divEl = document.createElement("div");
  
          // Set attributes to each div
          divEl.setAttribute("class", "profileCard");
  
          // Append each div we created to the body
          document.body.append(divEl);
  
          // Add the data
          divEl.append(element.name);

          //remove the evnt listener
           e.target.removeEventlistener("click", meetTeam);

          // 1. find the target


          // 2. remove event listener
        });
      });
  };
  
  // 1. Need to select an element to add an event listener to
  const btnElment = document.querySelector(".btnChefs");
  
  // 2. Define what type of event we want to add
  // click
  btnElment.addEventListener("click", meetTeam);
  
  // 3. Define which function to couple to the event
  
  ///////// Event object
  // 1. Select the element to attach
  
  // 2. Add listener to the button
  // newBtn.addEventListener("click", (e) => {
  //   console.log(this);
  //   console.log(e.currentTarget);
  // });
  
  const newBtn = document.querySelector("#btnOrder");
  
  /// Creating element
  newBtn.addEventListener("click", function () {
    // 1. Create a new <li>
    let liEl = document.createElement("li");
  
    // Add content to the new element
    liEl.innerHTML = "Order List";
  
    // 2. log that new element to the screen
    //   console.log(liEl);
  
    // Add element onto the body
    const divEl = document.querySelector(".screen");
  
    // Append element to the screen
    divEl.append(liEl);

    // console.log(liEl);
  }); 

const btnInput = document.querySelector('.btn-input')
  
btnInput.addEventListener('click', () => {
    let liEl = document.createElement('li')

    const inputEl = document.getElementById('user-data');

    const inputData = input.value;
    inputEl.value = inputData

    liEl.innerHTML = inputData;
})










// # Callback function

// # api request and output 
//     # fetch()
//         # .map ---  .filter 

// # object-oriented programming
//         # Encapsulation
//                     # let jordan = { 
//                     #     name: '',
//                     #     age: 0,
//                     #     occupation: ''
//                     #     introduceYourself: function(){
//                     #         console.log(`Hi, my name is #{name}`)
//                     #     }
//                     # }
//         # Abstraction
//         # Inheritance