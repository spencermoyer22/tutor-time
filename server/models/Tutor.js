const { Schema, model } = require('mongoose');

const TutorSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
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

const Tutor = model('Tutor', TutorSchema);

module.exports = Tutor;
