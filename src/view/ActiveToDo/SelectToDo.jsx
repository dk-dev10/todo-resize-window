import TextareaAutosize from "../../component/TextAreaAutoResize/TextAreaAutoResize"

const SelectToDo = ({ id, title }) => {
  return (
    <div>
      <div className="activeTodoHeader">
        <TextareaAutosize
          // onChange={(e) => setText(e.target.value)}
          placeholder='Title'
          value={title}
        />
        <select id="selectStatus" selected='waiting'>
          <option value="waiting">Waiting</option>
          <option value="progress">Progress</option>
          <option value="done">Done</option>
        </select>

      </div>
    </div>
  )
}

export default SelectToDo