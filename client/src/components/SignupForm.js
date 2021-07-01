import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
// import mutation to add user
import Auth from '../utils/auth';
import { ADD_USER } from '../../../../book-search-engine/client/src/utils/mutations';

const SignupForm = () => {
    // use mutation declaration
    const [formData, setFormData] = useState({username: '', email: '', password: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropogation();
        }

        try {
            // change based on mutation name
            // const {data} = await addUser({ variables: {...formData}});

            Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setFormData({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if necessary */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong when signing up.
                </Alert>
                <Form.Group>
                    <Form.Label>Select whether you are a tutor or student</Form.Label>
                    <Form.Control as='select' custom>
                        <option>Tutor</option>
                        <option>Student</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='username'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Select username'
                        name='username'
                        onChange={handleInputChange}
                        value={formData.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Must select a username!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Select a valid email'
                        name='email'
                        onChange={handleInputChange}
                        value={formData.email}
                        required
                    />
                    <Form.Control.Feeback type='invalid'>Must choose an email!</Form.Control.Feeback>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password must be 8 characters'
                        name='password'
                        onChange={handleInputChange}
                        value={formData.password}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Must choose a password!</Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!(formData.username && formData.email && formData.password)}
                    type='submit'
                    Submit>
                </Button>
            </Form>
            {error && <div>Sign up failed</div>}
        </div>
    );
};

export default SignupForm;