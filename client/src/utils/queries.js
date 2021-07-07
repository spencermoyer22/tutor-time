import { gql } from "@apollo/client";

// import gql from 'graphql-tag';

export const QUERY_ME_TUTOR = gql`
  query getMeTutor($id: ID!) {
    getMeTutor(_id: $id) {
      _id
      name
      email
      rate
      subject
      about
    }
  }
`;

export const QUERY_ME_STUDENT = gql`
  query getMeStudent($id: ID!) {
    getMeStudent(_id: $id) {
      _id
      name
      email
      grade
      about
      tutors {
        _id
        name
        email
        rate
        subject
        about
      }
    }
  }
`;

// export const QUERY_TUTORS = gql`
//   query tutors($id: ID) {
//     tutors(_id: $id) {
//       _id
//       name
//       email
//       subject
//       rate
//       about
//     }
//   }
// `;
