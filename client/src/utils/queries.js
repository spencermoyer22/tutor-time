import { gql } from '@apollo/client';

// import gql from 'graphql-tag';

export const QUERY_STUDENT = gql`
{
    getMe
    {
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

export const QUERY_TUTORS = gql`
    {
     _id
     name
     email
     subject
     rate
     about
    }     

`;

