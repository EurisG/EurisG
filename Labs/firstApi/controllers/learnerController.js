const { response } = require("../app");
const Learner = require("../models/learnerModel");

// / Refactor route controllers
// This is to retrieve all the learners at once
exports.getAllLearners = async (request, response) => {
  try {
  // Retrieve all the learnes from our database 
  const learners = await Learner.find();

  // send response 
    response.status(200).json({
      status: "success",
      data: {
        learners: learners,
      },
    });
  } catch(error) {
    response.status(500).json({
      status: "error",
      message: error,
    });
  }
  };

//  This controller is to create a new learner
exports.createLearner = (request, response) => {
  response.status(500).json({
    status: "fail",
    data: {
      message: "undefined routes",
    },
  });
};

exports.createLearner = async (request, response) => {
  // lets create new learner 
  const newLearner = await Learner.create(request.body);
  try {
// send reponse 
  response.status(201).json({
    status: "success",
    data: {
      newLearner: newLearner,
    },
  });
  } catch(error) {
    response.status(500).json({
      status: "error",
      message: error,
    })
  }
};


// This controller is to retrieve a single learner
exports.getSingleLearner = async (request, response) => {
  try {
  const learner = await Learner.findById(request.params.id);

    response.status(200).json({
      status: "success",
      data: {
        learner: learner,
      },
    });
  } catch(error) {
    response.status(500).json({
      status: "error",
      message: error,
    });
  }
  };
  // This controller is to update a single learner data
exports.updateLearner = async (request, response) => {
  try {
    const updatedLearner = await Learner.findByIdAndUpdate(request.params.id, request.body, {new: true});
    response.status(500).json({
      status: "fail",
      data: {
        updatedLearner,
      },
    });
  } catch(error) {
    response.status(500).json({
      status: "fail",
      message: error
    })
  }
  };

// This controller is to delete a single learner
exports.deleteLearner = async (request, response) => {
  try {

  await Learner.findByIdAndDelete(request.params.id)
  response.status(204).json({
    status: "success",
    data: {},
  });
  } catch(error) {
    response.status(500).json({
      status: "error",
      message: error
    })
  }
};
