const { Schema, model } = require('mongoose');

const TutorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rate: {
        type: String,
        required: true,
    },
});

const Tutor = model('Tutor', TutorSchema);

module.exports = Tutor;
