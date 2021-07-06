import { gql } from '@apollo/client';

// import gql from 'graphql-tag';

export const QUERY_ME_TUTOR = gql`
    {
        getMeTutor {
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
    getMeStudent
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

