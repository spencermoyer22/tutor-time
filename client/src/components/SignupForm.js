import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
// import mutation to add user
import Auth from '../utils/auth';

const SignupForm = () => {
    // use mutation declaration
    const [studentFormData, setStudentFormData] = useState({ username: '', email: '', password: '', grade: '' });
    const [tutorFormData, setTutorFormData] = useState({ username: '', email: '', password: '', subject: '', rate: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showForm, setShowForm] = useState(null);

    const handleTutorInputChange = (event) => {
        const { name, value } = event.target;
        setTutorFormData({ ...tutorFormData, [name]: value });
    };

    const handleStudentInputChange = (event) => {
        const { name, value } = event.target;
        setStudentFormData({ ...studentFormData, [name]: value });
    };

    const handleTutorFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropogation();
        }

        try {
            // change based on mutation name
            // const {data} = await addTutor({ variables: {...tutorFormData}});
            console.log(tutorFormData);

            // Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setTutorFormData({
            username: '',
            email: '',
            password: '',
            subject: 'English',
            rate: ''
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
            // change based on mutation name
            // const {data} = await addStudent({ variables: {...studentFormData}});
            console.log(studentFormData);

            // Auth.login(data.addTutor.token);
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setStudentFormData({
            username: '',
            email: '',
            password: '',
            grade: ''
        });
    };

    return (
        <div>
            <p>Would you like to sign up as a tutor or student?</p>
            <Button onClick={() => setShowForm('tutor')}>Tutor</Button>
            <Button onClick={() => setShowForm('student')}>Student</Button>

            {showForm === 'tutor' &&
                <div>
                    <Form noValidate validated={validated} onSubmit={handleTutorFormSubmit}>
                        {/* show alert if necessary */}
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong when signing up.
                        </Alert>
                        <Form.Group>
                            <Form.Label htmlFor='username'>Username</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Select username'
                                name='username'
                                onChange={handleTutorInputChange}
                                value={tutorFormData.username}
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
                                onChange={handleTutorInputChange}
                                value={tutorFormData.email}
                                required
                            />
                            <Form.Control.Feeback type='invalid'>Must choose an email!</Form.Control.Feeback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password must be a minimum of 8 characters'
                                name='password'
                                onChange={handleTutorInputChange}
                                value={tutorFormData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Must choose a password!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select a subject</Form.Label>
                            {/* need to add something to accept value to tutor form data */}
                            <Form.Control as="select" custom >
                                <option>English</option>
                                <option>Geography</option>
                                <option>History</option>
                                <option>Math</option>
                                <option>Science</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='rate'>Rate</Form.Label>
                            <Form.Control
                                type='rate'
                                placeholder='Enter your hourly rate'
                                name='rate'
                                onChange={handleTutorInputChange}
                                value={tutorFormData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Must enter your rate!</Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!(tutorFormData.username && tutorFormData.email && tutorFormData.password && tutorFormData.subject && tutorFormData.rate)}
                            type='submit'
                            >Submit
                        </Button>
                    </Form>
                    {/* {error && <div>Sign up failed</div>} */}
                </div>
            }

            {showForm === 'student' &&
                <div>
                    <Form noValidate validated={validated} onSubmit={handleStudentFormSubmit}>
                        {/* show alert if necessary */}
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong when signing up.
                        </Alert>
                        <Form.Group>
                            <Form.Label htmlFor='username'>Username</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Select username'
                                name='username'
                                onChange={handleStudentInputChange}
                                value={studentFormData.username}
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
                                onChange={handleStudentInputChange}
                                value={studentFormData.email}
                                required
                            />
                            <Form.Control.Feeback type='invalid'>Must choose an email!</Form.Control.Feeback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password must be a minimum of 8 characters'
                                name='password'
                                onChange={handleStudentInputChange}
                                value={studentFormData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Must choose a password!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='grade'>Grade</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your current grade'
                                name='grade'
                                onChange={handleStudentInputChange}
                                value={studentFormData.grade}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Must enter your grade!</Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!(studentFormData.username && studentFormData.email && studentFormData.password && studentFormData.grade)}
                            type='submit'
                            >Submit
                        </Button>
                    </Form>
                    {/* {error && <div>Sign up failed</div>} */}
                </div>
            }
        </div>
    );
};

export default SignupForm;