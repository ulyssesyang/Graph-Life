// Get all problems
const getProblems = function () {
    return new Promise((resolve, reject) => {
        resolve(problems);
    })
};

// Get specific problem
const getProblem = function (id) {
    return new Promise((resolve, reject) => {
        resolve(problems.find(problem => problem.id === id));
    })
};

// add a problem
const addProblem = function (newProblem) {
    return new Promise((resolve, reject) => {
        if(problems.find(problem => problem.name === newProblem.name)){
            reject('Problem already exists!');
        } else{
            newProblem.id = problems.length + 1;
            problems.push(newProblem);
            resolve(newProblem);
        }
    });
};

module.exports = {
	getProblems,
	getProblem,
	addProblem
}