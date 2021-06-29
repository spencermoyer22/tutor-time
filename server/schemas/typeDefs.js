const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Tutor {
        _id: ID
        name: String
        subject: String
        location: String
        rate: String
    }

    type Query {
        tutors: [Tutor]
    }
`;

module.exports = typeDefs;
