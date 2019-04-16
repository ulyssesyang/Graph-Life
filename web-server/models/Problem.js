const mongoose = require('mongoose');
const problemSchema = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    difficulty: String
});

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;