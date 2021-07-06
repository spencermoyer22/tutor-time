import React, { useState, useContext } from "react";

import studentContext from "../utils/studentContext"


const Profile = () => {
    
    const studentInfo = useContext(studentContext);

    return (
        <div className="profile-body">
        <div>
        <h1> Name: {studentInfo.name} </h1>
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