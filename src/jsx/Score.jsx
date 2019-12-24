import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Score = ({ score, totalval, questionlength }) => {
  var currentscore = ((score / totalval) * 100).toFixed(2)
  var minimumscore = (((score) / questionlength) * 100).toFixed(2)
  var maximumscore = (((score + (questionlength - totalval)) / questionlength) * 100).toFixed(2)
  return (
    <span>
      <div className='row'>
        <div className='col-6'><span className='quiz score'>Score: {((score / totalval) * 100).toFixed(2)} %</span></div>
        <div className='col-6'><span className='quiz score'>Max Score: {maximumscore} % </span></div>
      </div>
      <ProgressBar min={0}>
        <ProgressBar striped variant='success' min={0} now={minimumscore} label={`${minimumscore}%`} key={1} />
        <ProgressBar variant='warning' min={0} now={currentscore - minimumscore} label={`${currentscore}%`} key={2} />
        <ProgressBar striped variant='danger' min={0} now={maximumscore - currentscore} label={`${maximumscore}%`} key={3} />
      </ProgressBar>
    </span>)
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  totalval: PropTypes.number.isRequired,
  questionlength: PropTypes.number.isRequired
}

export default Score
