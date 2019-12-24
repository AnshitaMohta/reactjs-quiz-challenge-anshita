import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem.jsx'

const AnswerList = ({ answers, answerCallback, correctanswer, correctincorrect, currentIndex, rightanswer }) => {
  return (
    <div className='row'>
      {answers.map(function (answer, index) {
        return (
          <ListItem key={index} answerItem={decodeURIComponent(answer)} currentIndex={currentIndex} corrincorr={correctincorrect} answerCallback={answerCallback} index={index} correctanswer={correctanswer} rightanswer={rightanswer} alloptions={answers} />
        )
      }, this)}
    </div>
  )
}

AnswerList.propTypes = {
  answers: PropTypes.array.isRequired,
  answerCallback: PropTypes.func.isRequired,
  correct_answer: PropTypes.string,
  alloptions: PropTypes.array,
  correctincorrect: PropTypes.number,
  currentIndex: PropTypes.number,
  rightanswer: PropTypes.number
}

export default AnswerList
