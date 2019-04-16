const ProblemModel = require('../models/ProblemModel');

// Get all problems
const getProblems = function () {
	return new Promise((resolve, reject) => {
		ProblemModel.find({}, (err, problems) => {
			if (err) {
				reject(err);
			} else {
				resolve(problems);
			}
		})
	})
};

// Get specific problem
const getProblem = function (id) {
	return new Promise((resolve, reject) => {
		ProblemModel.find({id: id}, (err, problem) => {
			if (err) {
				reject(err);
			} else {
				resolve(problem);
			}
		})
	})
};

// add a problem
const addProblem = function (newProblem) {	
	return new Promise((resolve, reject) => {
		ProblemModel.find({name: newProblem.name}, (err, problem) => {
			if (err) {
				reject(err)
			} else if(problem) {
				reject('Problem already exists!');
			} else {
				ProblemModel.count({}, (err, count) => {
					if (err) {
						reject(err);
					} else if(count) {
						newProblem.id = (+count) + 1;
					} else {
						newProblem.id = 1;
					}
					ProblemModel.create(newProblem, (err, problem) => {
						if (err) {
							reject(err)
						} else {
							resolve(problem)
						}
					})
				})
			}
		})
	})
};

module.exports = {
	getProblems,
	getProblem,
	addProblem
}