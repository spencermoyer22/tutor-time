import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_TUTORS } from '../utils/queries';
import Form from 'react-bootstrap/Form';

const SearchTutors = () => {
  const { data, loading } = useQuery(QUERY_TUTORS);
  const { tutors } = data;
  console.log(tutors)
  const [filterContent, setFilterContent] = useState();
  let filteredTutors = tutors.filter(tutor => tutor.subject === filterContent);

  const handleFilter = async (event) => {
    const { value } = event.target;
    setFilterContent(value);
  }

  if (!tutors.length) {
    return <h3>No tutors have signed up yet...</h3>;
  }
  return (
    <div>
      <div className='container-fluid'>
        <Form className='mt-5 mx-5'>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control
              as="select"
              custom
              name='filter'
              onChange={handleFilter}
              value={filterContent}
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
        </Form>
        <div className='row'>
          {filteredTutors &&
            filteredTutors.map(tutor => (
              <div key={tutor._id} className='card mb-3 col-10 col-md-5 mx-auto'>
                <div className='card-body'>
                  <p className='card-title'>{tutor.name}</p>
                  <div className='d-flex justify-content-between'>
                    <p className='d-inline'>Subject: {tutor.subject}</p>
                    <p className='d-inline'>Rate: ${tutor.rate}</p>
                  </div>
                  {tutor.about ? <p className='card-text'>{tutor.about}</p> : <p className='card-text'>This tutor has no bio...</p>}
                  <p className='footer'>Contact Me: {tutor.email}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SearchTutors;