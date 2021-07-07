import React, { useState, useContext } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_TUTORS } from '../utils/queries';

const SearchTutors = () => {
  const { data, loading } = useQuery(QUERY_TUTORS);
  const { tutors } = data;
  console.log(tutors);

  if (!tutors.length) {
    return <h3>No tutors have signed up yet...</h3>;
  }
  return (
    <div>
      <h1>Tutors</h1>
      <div className='container-fluid'>
        <div className='row'>
      {tutors &&
        tutors.map(tutor => (
          <div key={tutor._id} className='card mb-3 col-10 col-md-5 mx-auto'>
            <div className='card-body'>
              <p className='card-title'>{tutor.name}</p>
              <div className='d-flex justify-content-between'>
                <p className='d-inline'>Subject: {tutor.subject}</p>
                <p className='d-inline'>Rate: ${tutor.rate}</p>
              </div>
              {tutor.about ? <p className='card-text'>{tutor.about}</p> : <p className='card-text'>This tutor doesn't have a bio...</p>}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default SearchTutors;