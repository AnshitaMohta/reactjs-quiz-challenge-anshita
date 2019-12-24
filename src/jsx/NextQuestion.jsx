import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const NextQuestion = ({ nextquestion, correctanswer }) => {
  function next () {
    nextquestion(correctanswer)
  }
  return (
    <span className='quiz score'> <button className='nextbtn' onClick={next}>Next Question</button> </span>
  )
}

NextQuestion.propTypes = {
  correctanswer: PropTypes.string,
  nextquestion: PropTypes.func.isRequired
}

export default NextQuestion
