// IMPORT EXPRESS TO CREATE ROUTERS 
const { Router } = require('express');
const express = require('express');

const learnerController = require('../controllers/learnerController')

const router = express.Router();

// lets refactor the route 
router.route("/").get(learnerController.getAllLearners).post(learnerController.createLearner);

router.route("/:id").get(learnerController.getSingleLearner).patch(learnerController.updateLearner).delete(learnerController.deleteLearner);


// EXPORT OUR ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION 
module.exports = router ;