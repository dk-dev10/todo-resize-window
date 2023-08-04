import TextareaAutosize from "../../component/TextAreaAutoResize/TextAreaAutoResize"

const SelectToDo = ({ title, status, setTitle, setStatus }) => {
  return (
    <div className="activeTodoChanges">
      <TextareaAutosize
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        value={title}
      />
      <select
        id="selectStatus"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="waiting">Waiting</option>
        <option value="progress">Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  )
}

export default SelectToDo