import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Progress = ({ progress, total }) => {
  return (
    <span>
      <div className='row'>
        <div className='col-4'>Question {progress + 1} of {total}</div>
      </div>
    </span>
  );
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Progress
