const { AuthenticationError } = require("apollo-server-express");
const { Tutor, Student } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    tutors: async () => {
      return Tutor.find()
        .select('-password')
    },

    student: async (parent, args, context) => {
      if (context.user) {
        const userData = await Student.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('savedBooks')

        return userData;
    }

    throw new AuthenticationError('Not logged in');
    },
    tutor: async (parent, args, context) => {
      if (context.user) {
        const userData = await Tutor.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('savedBooks')

        return userData;
    }

    throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    addTutor: async (parent, args) => {
      const tutor = await Tutor.create(args);
      const token = signToken(tutor);

      return { token, tutor };
    },

    addStudent: async (parent, args) => {
      const student = await Student.create(args);
      const token = signToken(student);

      return { token, student };
    },

    tutorLogin: async (parent, { email, password }) => {
      const tutor = await Tutor.findOne({ email });

      if (!tutor) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await tutor.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(tutor);

      return { token, tutor };
    },

    studentLogin: async (parent, { email, password }) => {
      const student = await Student.findOne({ email });

      if (!student) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await student.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(student);

      return { token, student };
    },
  },
};

module.exports = resolvers;
