import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import {  } from '../utils/mutations';
import Auth from '../utils/auth';

const EditAbout = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showForm, setShowForm] = useState(null);

    const handleInputChange = async (event) => {
        const { value } = event.target;
        setFormData(value)
    };

    return (
        <>

        </>
    );
};

export default EditAbout;