import { gql } from "@apollo/client";

// import gql from 'graphql-tag';

export const QUERY_ME_TUTOR = gql`
  query tutor($email: String!) {
    tutor(email: $email) {
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
  query student($email: String!) {
    student(email: $email) {
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
