import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Questions = ({ questionText }) => {
  return (
    <span>
      <div className='row'>
        <div className='col-10'><h5 className='mb-4'>{ decodeURIComponent(questionText)}</h5></div>
      </div>
    </span>
  )
}

Questions.propTypes = {
  questionText: PropTypes.string.isRequired
}

export default Questions
