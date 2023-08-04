import { useContext } from "react";
import { TodosContext, todosActions } from "../../context";
import ToDoList from "../../component/ToDoList/ToDoList";
import { addTodo, selectTodo } from "../../context/actions";


const Todos = () => {
  const [state, dispatch] = useContext(TodosContext);
  const { todos, filtered, activeTodo } = state;
  const resTodos = filtered !== null ? filtered : todos;

  const selectTodoItem = (id) => {
    dispatch(selectTodo(id))
  }

  const removeTodo = (id) => {
    dispatch(todosActions.removeTodo(id))
  }

  return (
    <div className="todos">
      <div className="todosHeader">
        <h3>ToDo List</h3>
        <button className="btn addBtn" onClick={() => dispatch(addTodo())} >new Todo</button>
      </div>
      <ToDoList
        todos={resTodos}
        removeTodo={removeTodo}
        selectTodoItem={selectTodoItem}
        activeClass={activeTodo?.id}
      />
    </div >
  )
}

export default Todos