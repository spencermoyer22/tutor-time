const { Tutor } = require('../models');

const resolvers = {
    Query: {
        tutors: async () => {
            return await Tutor.find();
        },
    },
};

module.exports = resolvers;
