import React, { useState } from "react";

const Profile = () => {

    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }

    return (
        ddd
    )

}

export default Profile;