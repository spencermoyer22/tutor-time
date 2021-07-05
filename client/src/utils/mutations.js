import { gql } from 'graphql-tag'

export const TUTOR_LOGIN = gql`
    mutation tutorLogin($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          _id
        }
      }
    }
  `;

export const STUDENT_LOGIN = gql`
  mutation studentLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TUTOR = gql`
  mutation addTutor(
    $name: String!
    $email: String!
    $password: String!
    $subject: String!
    $rate: String!
  ) {
    addTutor(
      name: $firstName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation addStudent(
    $name: String!
    $email: String!
    $password: String!
    $grade: String!
  ) {
    addStudent(
      name: $firstName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const EDIT_STUDENT = gql`
  mutation editStudent($student:[ID]!) {
        student: ($student) {
    $about: String!
    $grade: String!
  }
}




`