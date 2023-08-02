import { useContext, useEffect, useState } from "react"
import { TodosContext } from "../../context"
import TextareaAutosize from "../../component/TextAreaAutoResize/TextAreaAutoResize";
import { changeTodo } from "../../context/actions";


const ActiveToDo = () => {
  const [{ activeTodo }, dispatch] = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('waiting');

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
            <TextareaAutosize
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Title'
              value={title}
            />
            <select id="selectStatus" value={status} onChange={(e) => setStatus(e.target.value)} >
              <option value="waiting">Waiting</option>
              <option value="progress">Progress</option>
              <option value="done">Done</option>
            </select>
            <div className="actionBtns">
              <button className="btn saveBtn" onClick={handleChangeTodo}>Save</button>
            </div>
          </div>
      }
    </div>
  )
}

export default ActiveToDo