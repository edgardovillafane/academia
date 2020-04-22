const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentsSchema = new Schema({
    name: { type: String, required: true},
    surname: { type: String, required: true },
    phone: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentsSchema);