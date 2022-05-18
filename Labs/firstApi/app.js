const express = require('express');
const app = express();
const port = 3000;

const learnerController = require('./controllers/learnerController')

console.log(learnerController)
// // Refactor route controllers
// // This is to retrieve all the learners at once
// const getAllLearners = (request, response) => {
//     response.status(500).json({
//       status: "fail",
//       data: {
//         message: "undefined routes",
//       },
//     });
//   };

// //  This controller is to create a new learner
// const createLearner = (request, response) => {
//   response.status(500).json({
//     status: "fail",
//     data: {
//       message: "undefined routes",
//     },
//   });
// };
// // This controller is to retrieve a single learner
// const getSingleLearner = (request, response) => {
//     response.status(500).json({
//       status: "fail",
//       data: {
//         message: "undefined routes",
//       },
//     });
//   };
//   // This controller is to update a single learner data
// const updateLearner = (request, response) => {
//     response.status(500).json({
//       status: "fail",
//       data: {
//         message: "undefined routes",
//       },
//     });
//   };

// // This controller is to delete a single learner
// const deleteLearner = (request, response) => {
//   response.status(500).json({
//     status: "fail",
//     data: {
//       message: "undefined routes",
//     },
//   });
// };

// create an express router 
const learnerRouter = express.Router();

// Create Middleware to handle our routes
app.use('/api/v1/learners', learnerRouter);

// lets refactor the route 
learnerRouter.route("/").get(learnerController.getAllLearners).post(learnerController.createLearner);
learnerRouter.route("/:id").get(learnerController.getSingleLearner).patch(learnerController.updateLearner).delete(learnerController.deleteLearner);





app.listen(port, () => {
    console.log(`Listening on PORT ${port}...`)
});