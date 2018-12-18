import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, previousState }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text} - Etat précédent {previousState}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  previousState : PropTypes.string.isRequired
}

export default Todo