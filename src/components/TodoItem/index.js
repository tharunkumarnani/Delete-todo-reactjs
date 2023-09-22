// Write your code here
import './index.css'

const TodoItem = props => {
  const {deleteTodo, todoDetails} = props
  const {id, title} = todoDetails
  const deleteRequest = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <h1 className="todo-item-heading">{title}</h1>
      <button className="delete-button" type="button" onClick={deleteRequest}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
