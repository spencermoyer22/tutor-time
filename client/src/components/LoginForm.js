import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { STUDENT_LOGIN, TUTOR_LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showForm, setShowForm] = useState(null);
    const [loginStudent, {studentError}] = useMutation(STUDENT_LOGIN);
    const [loginTutor, {tutorError}] = useMutation(TUTOR_LOGIN);

    const handleInputChange = async (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleTutorFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropogation();
        }

        try {
            const { data } = await loginTutor({ variables: { ...formData } });
            Auth.login(data.tutorLogin.token);
            localStorage.setItem('userType', 'TUTOR');
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setFormData({
            email: '',
            password: ''
        });
    };

    const handleStudentFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropogation();
        }

        try {
            const { data } = await loginStudent({ variables: { ...formData } });
            Auth.login(data.studentLogin.token);
            localStorage.setItem('userType', 'STUDENT');
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setFormData({
            email: '',
            password: ''
        });
    };

    return (
        <div>
            <p>Would you like to log in as a tutor or student?</p>
            <Button onClick={() => setShowForm('tutor')}>Tutor</Button>
            <Button onClick={() => setShowForm('student')}>Student</Button>

            {showForm === 'tutor' &&
                <div>
                    <p> TUTOR FORM </p>
                    <Form noValidate validated={validated} onSubmit={handleTutorFormSubmit}>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Invalid credentials!
                        </Alert>
                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your Email'
                                name='email'
                                onChange={handleInputChange}
                                value={formData.email}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Your email is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Your password'
                                name='password'
                                onChange={handleInputChange}
                                value={formData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Your password is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!(formData.email && formData.password)}
                            type='submit'
                            >Submit
                        </Button>
                    </Form>
                    {tutorError && <div>Login failed</div>}
                </div>}
            {showForm === 'student' &&
                <div>
                    <p> STUDENT FORM </p>
                    <Form noValidate validated={validated} onSubmit={handleStudentFormSubmit}>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Invalid credentials!
                        </Alert>
                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your Email'
                                name='email'
                                onChange={handleInputChange}
                                value={formData.email}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Your email is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Your password'
                                name='password'
                                onChange={handleInputChange}
                                value={formData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Your password is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!(formData.email && formData.password)}
                            type='submit'
                            >Submit
                        </Button>
                    </Form>
                    {studentError && <div>Login failed</div>}
                </div>}
        </div>
    );
};

export default LoginForm;