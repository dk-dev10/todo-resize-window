import './style.css'

const ToDoList = ({ todos, handleEditTodo, handleDeleteTodo }) => {
  return (
    <div className="todo-list"
    >
      {todos.map((todo) => (
        <div key={todo.id} className={`todo ${todo.status}`}>
          {todo.text.length > 12 ? (
            <div className="todo-text">
              {todo.text.substring(0, 12)}...
            </div>
          ) : (
            <div className="todo-text">{todo.text}</div>
          )}
          <div className="todo-controls">
            {/* <input
              type="text"
              value={todo.text}
              onChange={(e) => handleEditTodo(todo.id, e.target.value)}
            /> */}
            <button onClick={() => handleDeleteTodo(todo.id)}>Удалить</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ToDoList