import { memo, useContext } from "react";
import { TodosContext, todosActions } from "./context";


const Todos = () => {
  const [todos, dispatch] = useContext(TodosContext);

  return (
    <div className="todo-list"
    >
      {todos?.map((todo) => (
        <div key={todo?.id} className={`todo ${todo.status}`}>
          {todo.title.length > 12 ? (
            <div className="todo-text">
              {todo.title.substring(0, 12)}...
            </div>
          ) : (
            <div className="todo-text">{todo.title}</div>
          )}
          <div className="todo-controls">
            {/* <input
              type="text"
              value={todo.text}
              onChange={(e) => handleEditTodo(todo.id, e.target.value)}
            /> */}
          </div>
        </div>
      ))}
      <button onClick={() => dispatch(todosActions.addTodo({ title: 'Random', id: Math.random(), status: 'waiting' }))}>Add</button>
    </div >
  )
}

export default memo(Todos)