// // console.log(module)

// const displayName = (name) => {
//     console.log("hello my name is " + name)
// }

// const sayhello = () => {
//     console.log('hello')
// }

// const number = 300

// module.exports = {
//      display: displayName,
//      hello: sayhello,
//      number: number
// }

// console.log(module)

// • require express
const express = require('express');

// • set up/initialized server 
const app = express();

app.set('view engine', 'ejs')


// • routes/ midware
// ----------index 
app.get('/', function (req, res) {
    res.render('index')
  
  });
//   --------about 
  app.get('/about', function (req, res) {
    res.render('about')
    
  });
//   --------contact 
  app.get('/contact', function (req, res) {
    res.render('contact')
   
  });
  
  
  
  
//   app.get('/array', function (req, res) {
//       let home = ['you', 'are', 'home']
//     res.send(home);
//   });
//   app.get('/object', function (req, res) {
//       let euris = {name: 'euris' , age: 25, ethnicity: 'latino'}
//     res.send(euris);
//   });
//   app.get('/object2', function (req, res) {
//       let today = {day: 'wednesday', class: 'node', instructor: 'jordan'}
//     res.send(today);
//   });
 


  // • Make server run 
app.listen(3000, function() {
    console.log('listening on port 3000')
});