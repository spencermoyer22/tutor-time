import React, { useState, useContext } from "react";

import { useQuery } from '@apollo/client'

import { QUERY_ME_STUDENT, QUERY_ME_TUTOR } from "../utils/queries";


const Profile = () => {

    const user = localStorage.getItem('userType');

    const { loading, data } = useQuery(user === 'TUTOR' ? QUERY_ME_TUTOR : QUERY_ME_STUDENT);

    const userData = data?.student || data?.tutor || {};
    if (loading) {
        return <div>Loading...</div>
    }

    console.log(userData);

    return (
        <div className="profile-body">
            <div className = "profile">
                {/* <h1> Name: { } </h1>
                <h2> Grade: </h2>
                <h2> Rate:</h2>
                <h3> Subject: </h3>
                <h4> About Me: </h4> <button type="submit">Edit</button>
                <p> </p> */}
                <h1>{userData.name}</h1>
                {data.tutor ? (<div className='justify-content around'>
                    <p>Subject: {userData.subject}</p>
                    <p>Rate: {userData.rate}</p>
                </div>) : (
                    <p>Grade: {userData.grade}</p>
                )}
                {userData.about ? <div>{userData.about}</div> : <button className='btn createAbout'>Create your bio now!</button>}
                {data.tutor && <div>If you are interested in working together, contact me at my email: {userData.email}</div>}
            </div>
        </div>

    )

}

export default Profile;