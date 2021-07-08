import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_TUTORS } from '../utils/queries';
import Form from 'react-bootstrap/Form';

const SearchTutors = () => {
  const { data, loading } = useQuery(QUERY_TUTORS);
  const [filterContent, setFilterContent] = useState();

  const handleFilter = async (event) => {
    const { value } = event.target;
    setFilterContent(value);
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='container-fluid'>
      <h2 className='text-center mt-3 mb-0'>Filter tutors by subject below</h2>
      <Form className='mt-2 mx-5'>
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
        {data.tutors &&
          data.tutors.filter(filteredTutors => filteredTutors.subject === filterContent).map(tutor => (
            <div key={tutor._id} className='card mb-3 col-10 col-md-5 mx-auto'>
              <div className='card-body'>
                <p className='card-title'>{tutor.name}</p>
                <div className='d-flex justify-content-between'>
                  <p className='d-inline'>Subject: {tutor.subject}</p>
                  <p className='d-inline'>Rate: ${tutor.rate}</p>
                </div>
                {tutor.about}
                <p className='footer mt-2'>Contact Me: {tutor.email}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchTutors;