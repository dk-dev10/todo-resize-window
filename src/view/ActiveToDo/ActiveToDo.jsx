import { useContext, useEffect, useState } from "react"
import { TodosContext } from "../../context"
import { changeTodo } from "../../context/actions";
import SelectToDo from "./SelectToDo";


const ActiveToDo = () => {
  const [{ activeTodo }, dispatch] = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(activeTodo?.status)
    setTitle(activeTodo?.title)
  }, [activeTodo])


  const handleChangeTodo = () => {
    const newTodo = {
      ...activeTodo,
      title,
      status
    }
    dispatch(changeTodo(newTodo))
  }

  return (
    <div>
      {
        activeTodo === null
          ? 'Select ToDo or create a new ToDo'
          : <div className="activeTodoHeader">
            <SelectToDo setTitle={setTitle} setStatus={setStatus} title={title} status={status} />
            <div className="actionBtns">
              <button className="btn saveBtn" onClick={handleChangeTodo}>Save</button>
            </div>
          </div>
      }
    </div>
  )
}

export default ActiveToDo