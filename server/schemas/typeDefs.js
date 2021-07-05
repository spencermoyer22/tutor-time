const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Tutor {
        _id: ID
        name: String
        email: String
        password: String
        subject: String
        rate: String
        about: String
    }

    type Student {
        _id: ID
        name: String
        email: String
        password: String
        grade: String
        about: String
        tutors: [Tutor]
    }

    type TutorAuth {
        token: ID
        user: Tutor
    }

    type StudentAuth {
        token: ID
        user: Student
    }

    type Query {
        tutors: [Tutor]
        getMe: Student
    }

    type Mutation {
        addTutor(name: String!, email: String!, password: String!, subject: String!, rate: String!): TutorAuth
        addStudent(name: String!, email: String!, password: String!, grade: String!): StudentAuth
        editTutor(rate: String, about: String): Tutor
        editStudent(grade: String, about: String): Student
        studentLogin(email: String!, password: String!): StudentAuth
        tutorLogin(email: String!, password: String!): TutorAuth
    }

`;

module.exports = typeDefs;
