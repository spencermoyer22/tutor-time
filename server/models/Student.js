const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: true,
    },
});

const Student = model('Student', StudentSchema);

module.exports = Student;
