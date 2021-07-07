import { gql } from "@apollo/client";

// import gql from 'graphql-tag';

export const QUERY_TUTORS = gql`
{
  tutors {
		_id
    name
    email
    subject
    rate
    about
  }
}
`;

export const QUERY_ME_TUTOR = gql`
{
  tutor {
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
{
  student {
      _id
      name
      email
      grade
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
