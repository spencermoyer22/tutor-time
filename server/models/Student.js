const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new Schema({
    //change this to name instead of first + last
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
    grade: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: false,
    },
    tutors: [{
        type: Schema.Types.ObjectId,
        ref: "Tutor",
    }],
});

studentSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  studentSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

const Student = model('Student', studentSchema);

module.exports = Student;
