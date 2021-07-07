import React, { useState, useContext } from "react";

import { useQuery } from '@apollo/client'

import { QUERY_ME_STUDENT, QUERY_ME_TUTOR } from "../utils/queries"

import Auth from '../utils/auth';

import { useParams } from 'react-router-dom'


const Profile = () => {
    
    const user = localStorage.getItem('userType');
    const profile = Auth.getProfile();
    console.log(profile.data.email);
   
    const { loading, data } = useQuery(user === 'TUTOR' ? QUERY_ME_TUTOR : QUERY_ME_STUDENT, {
        variables: { _id: profile.data.email }
    });
    
    const userData = data?.student || data?.tutor || {};
    if (loading) {
      return <div>Loading...</div>
    }

    console.log(userData);

    return (
        <div className="profile-body">
        <div>
        <h1> Name: {} </h1>
        <h2> Grade: </h2>
        <h2> Rate:</h2>
        <h3> Subject: </h3>
        <h4> About Me: </h4> <button type="submit">Edit</button>
        <p> </p>

        </div>
        </div>

    )

}

export default Profile;