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
        tutor: Tutor
    }

    type StudentAuth {
        token: ID
        student: Student
    }

    type Query {
        tutors(_id: ID): [Tutor]
        student: Student
        tutor: Tutor
    }

    type Mutation {
        addTutor(name: String!, email: String!, password: String!, subject: String!, rate: String!, about: String!): TutorAuth
        addStudent(name: String!, email: String!, password: String!, grade: String!, about: String!): StudentAuth
        editTutor(rate: String, about: String): Tutor
        editStudent(grade: String, about: String): Student
        studentLogin(email: String!, password: String!): StudentAuth
        tutorLogin(email: String!, password: String!): TutorAuth
    }

`;

module.exports = typeDefs;
