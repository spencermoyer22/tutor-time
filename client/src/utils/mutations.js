import { gql } from 'graphql-tag'

export const TUTOR_LOGIN = gql`
    mutation tutorLogin($email: String!, $password: String!) {
      tutorLogin(email: $email, password: $password) {
        token
        tutor {
          _id
        }
      }
    }
  `;

export const STUDENT_LOGIN = gql`
  mutation studentLogin($email: String!, $password: String!) {
    studentLogin(email: $email, password: $password) {
      token
      student {
        _id
      }
    }
  }
`;

export const ADD_TUTOR = gql`
  mutation addTutor($name: String!, $email: String!, $password: String!, $subject: String!, $rate: String!, $about: String!) {
    addTutor(name: $name, email: $email, password: $password, subject: $subject, rate: $rate, about: $about) {
      token
      tutor {
        _id
      }
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation addStudent($name: String!, $email: String!, $password: String!, $grade: String!, $about: String!) {
    addStudent(name: $name, email: $email, password: $password, grade: $grade, about: $about) {
      token
      student {
        _id
      }
    }
  }
`;

export const EDIT_STUDENT = gql`
  mutation editStudent($grade: String, $about: String) {
    editStudent(grade: $grade, about: $about) {
        grade
        about
    }
  }
`;

export const EDIT_TUTOR = gql`
  mutation editTutor($rate: String, $about: String) {
    editTutor(rate: $rate, about: $about) {
        rate
        about
    }
  }
`;