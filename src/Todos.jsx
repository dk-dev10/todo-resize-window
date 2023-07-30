import { useContext } from "react";
import { TodosContext, todosActions } from "./context";
import ToDoList from "./component/ToDoList/ToDoList";


const Todos = () => {
  const [state, dispatch] = useContext(TodosContext);
  const { todos, filtered } = state;
  const resTodos = filtered !== null ? filtered : todos;

  const addTodo = () => {
    dispatch(
      todosActions
        .addTodo(
          { title: 'Random list app text', id: Math.random(), status: 'waiting' }
        )
    )
  }

  const removeTodo = (id) => {
    dispatch(todosActions.removeTodo(id))
  }

  return (
    <div className="todos">
      <button
        onClick={addTodo}
      >
        Add
      </button>
      <ToDoList todos={resTodos} removeTodo={removeTodo} />
    </div >
  )
}

export default Todos