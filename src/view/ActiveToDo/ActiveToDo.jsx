import { useContext, useEffect, useState } from "react"
import { TodosContext } from "../../context"
import TextareaAutosize from "../../component/TextAreaAutoResize/TextAreaAutoResize";


const ActiveToDo = () => {
  const [{ activeTodo }] = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState( 'waiting');

  useEffect(() => {
    setStatus(activeTodo?.status)
    setTitle(activeTodo?.title)
  }, [activeTodo])
  

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

          </div>
      }
    </div>
  )
}

export default ActiveToDo