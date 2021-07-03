const { AuthenticationError } = require('apollo-server-express');
const { Tutor, Student } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        tutors: async (parent, args, context) => {
            if (context.tutor) {
                const tutor = await Tutor.findById(context.tutor._id).populate()

                return tutor;
            }

            throw new AuthenticationError('Not logged in');
        },

        students: async (parent, args, context) => {
            if (context.student) {
                const student = await Student.findById(context.tutor._id).populate()

                return student;
            }

            throw new AuthenticationError('Not logged in');
        },
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
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await tutor.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(tutor);

            return { token, tutor };
        },

        studentLogin: async (parent, { email, password }) => {
            const student = await Student.findOne({ email });

            if (!student) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await student.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(student);

            return { token, student };
        }
    }
};

module.exports = resolvers;
