const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const tutorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    subject: {
        type: String,
        required: false,
    },
    rate: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: false,
    },
});

tutorSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

tutorSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

const Tutor = model('Tutor', tutorSchema);

module.exports = Tutor;
