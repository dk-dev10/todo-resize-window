import './style.css'

const ToDoList = ({ todos, removeTodo }) => {

  return (
    <div className="todoList">
      {todos?.map((todo) => (
        <div key={todo.id} className={`todoListItem ${todo.status}`}>
          <div className="todoTitle">{todo.title}</div>
          <button
            className="todoControls"
            onClick={() => removeTodo(todo.id)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  )
}

export default ToDoList