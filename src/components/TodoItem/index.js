// Write your code here

import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {title, id} = details

  const onDelete = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="list-elements">
      <p className="title">{title}</p>
      <div>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
