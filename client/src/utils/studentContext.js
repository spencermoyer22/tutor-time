import React,{ createContext } from 'react';

const studentContext = createContext({
    _id: "",
    name: "Not logged in yet!",
    email: "",
    grade: "",
    about: "",
    tutors: [{
        name: "",
        _id: "",
        email: "",
        rate: "",
        subject: "",
        about: ""
    }]

})

export default studentContext;