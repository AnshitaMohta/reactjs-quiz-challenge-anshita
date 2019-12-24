import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Category = ({ category }) => {
  return (
    <span>
      <div className='row'>
        <div className='col-4'><span className='colorStyle'>{decodeURIComponent(category)}</span></div>
      </div>
    </span>
  )
}

Category.propTypes = {
  category: PropTypes.string.isRequired
}

export default Category
