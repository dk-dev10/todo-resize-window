const ToDoList = ({ todos, removeTodo, selectTodoItem, activeClass }) => {
  const handleRemove = (event, todo) => {
    event.stopPropagation();
    removeTodo(todo.id)
  }

  return (
    <div className="todoList">
      {todos?.map((todo) => (
        <div
          key={todo?.id}
          className={
            `todoListItem ${todo?.status} 
            ${todo?.id === activeClass
              ? 'active'
              : ''}`
          }
          onClick={() => selectTodoItem(todo.id)}
        >
          <div className="todoTitle">{todo?.title}</div>
          <button
            className="todoControls"
            onClick={(event) => handleRemove(event, todo)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  )
}

export default ToDoList