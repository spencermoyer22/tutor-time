import { useState } from 'react';
import { Form, Button, Alert, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_STUDENT, ADD_TUTOR } from '../utils/mutations';
// import mutation to add user
import Auth from '../utils/auth';

const SignupForm = () => {
    // use mutation declaration
    const [studentFormData, setStudentFormData] = useState({ name: '', email: '', password: '', grade: '' });
    const [tutorFormData, setTutorFormData] = useState({ name: '', email: '', password: '', subject: '', rate: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showForm, setShowForm] = useState(null);
    const [addStudent, { studentError }] = useMutation(ADD_STUDENT);
    const [addTutor, { tutorError }] = useMutation(ADD_TUTOR);

    const handleTutorInputChange = async (event) => {
        const { name, value } = event.target;
        setTutorFormData({ ...tutorFormData, [name]: value });
    };

    const handleStudentInputChange = async (event) => {
        const { name, value } = event.target;
        setStudentFormData({ ...studentFormData, [name]: value });
    };

    const handleTutorFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addTutor({ variables: { ...tutorFormData } });

            Auth.login(data.addTutor.token);
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setTutorFormData({
            name: '',
            email: '',
            password: '',
            subject: '',
            rate: ''
        });
    };

    const handleStudentFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addStudent({ variables: { ...studentFormData } });

            Auth.login(data.addStudent.token);
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setStudentFormData({
            name: '',
            email: '',
            password: '',
            grade: ''
        });
    };

    return (
        <>
            <p>Would you like to sign up as a tutor or student?</p>
            <Button onClick={() => setShowForm('tutor')}>Tutor</Button>
            <Button onClick={() => setShowForm('student')}>Student</Button>

            {showForm === 'tutor' &&
                <>
                    {/* This is needed for the validation functionality above */}
                    <Form noValidate validated={validated} onSubmit={handleTutorFormSubmit}>
                        {/* show alert if server response is bad */}
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong with your signup!
                        </Alert>

                        <Form.Group>
                            <Form.Label htmlFor='username'>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your name'
                                name='name'
                                onChange={handleTutorInputChange}
                                value={tutorFormData.name}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Your email address'
                                name='email'
                                onChange={handleTutorInputChange}
                                value={tutorFormData.email}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Your password'
                                name='password'
                                onChange={handleTutorInputChange}
                                value={tutorFormData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={handleTutorInputChange}
                                name='subject'
                                value={tutorFormData.subject}
                                required
                            >
                                <option value=''>Select a subject</option>
                                <option value='Biology'>Biology</option>
                                <option value='Chemistry'>Chemistry</option>
                                <option value='Computer Science'>Comupter Science</option>
                                <option value='English'>English</option>
                                <option value='Grography'>Geography</option>
                                <option value='History'>History</option>
                                <option value='Math'>Math</option>
                                <option value='Music'>Music</option>
                                <option value='Physics'>Physics</option>
                                <option value='Theatre'>Theater</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='username'>Rate</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your current grade'
                                name='rate'
                                onChange={handleTutorInputChange}
                                value={tutorFormData.rate}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Rate is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!(tutorFormData.name && tutorFormData.email && tutorFormData.password && tutorFormData.subject && tutorFormData.rate)}
                            type='submit'
                            variant='success'
                            onClick={() => console.log(tutorFormData)}
                        >
                            Submit
                    </Button>
                    </Form>
                    {tutorError && <div>Sign up failed</div>}
                </>
            }

            {showForm === 'student' &&
                <>
                    {/* This is needed for the validation functionality above */}
                    <Form noValidate validated={validated} onSubmit={handleStudentFormSubmit}>
                        {/* show alert if server response is bad */}
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong with your signup!
                        </Alert>

                        <Form.Group>
                            <Form.Label htmlFor='username'>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your name'
                                name='name'
                                onChange={handleStudentInputChange}
                                value={studentFormData.name}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Your email address'
                                name='email'
                                onChange={handleStudentInputChange}
                                value={studentFormData.email}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Your password'
                                name='password'
                                onChange={handleStudentInputChange}
                                value={studentFormData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='username'>Grade</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your current grade'
                                name='grade'
                                onChange={handleStudentInputChange}
                                value={studentFormData.grade}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Grade is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!(studentFormData.name && studentFormData.email && studentFormData.password && studentFormData.grade)}
                            type='submit'
                            variant='success'>
                            Submit
                        </Button>
                    </Form>
                    {studentError && <div>Sign up failed</div>}
                </>
            }
        </>
    );
};

export default SignupForm;