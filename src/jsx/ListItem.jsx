import React from 'react'
import PropTypes from 'prop-types'
const ListItem = ({ answerItem, answerCallback, index, correctanswer, alloptions, corrincorr, rightanswer, currentIndex }) => {
  function onClickAnswer () {
    answerCallback(index, correctanswer, alloptions, corrincorr, rightanswer, currentIndex)
  }
  return (
    <div className='col-6' onClick={onClickAnswer}>
      {(() => {
        switch (corrincorr) {
          case 0: return <p
            className={corrincorr === undefined ? 'block' : (alloptions[index] === correctanswer) ? 'correct' : 'block'}>{answerItem}
          </p>
          case 1: return <p
            className={corrincorr === undefined ? 'block' : (currentIndex === index) ? 'in_correct' : (alloptions[index] === correctanswer) ? 'correct' : 'block'}>{answerItem}
          </p>
          default: return <p className={'block'}>{answerItem}
          </p>
        }
      })()}
    </div>

  )
}

ListItem.propTypes = {
  answerItem: PropTypes.string.isRequired,
  answerCallback: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  correctanswer: PropTypes.string.isRequired,
  alloptions: PropTypes.array,
  corrincorr: PropTypes.number,
  rightanswer: PropTypes.number,
  currentIndex: PropTypes.number
}

export default ListItem
