import { useState } from 'react';

import ToDoList from "./view/ToDoList/ToDoList";

import './App.css';
import ActiveToDo from './view/ActiveToDo/ActiveToDo';
import DraggableDiv from './component/dragBox';
import { TodosProvider } from './context';
import Todos from './Todos';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Сделать покупки', status: 'waiting' },
    { id: 2, text: 'Приготовить обед', status: 'progress' },
    { id: 3, text: 'Выучить React', status: 'done' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const [listWidth, setListWidth] = useState(500);
  const listWidthSize = {
    max: 700,
    min: 350
  }
  const [resizing, setResizing] = useState(false);

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos([...todos, { id: newId, text: newTodo, status: 'waiting' }]);
      setNewTodo('');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TodosProvider>
      <div className="app">
        <div className="todoList" style={{
          width: `${listWidth}px`
        }} >
          <div className="search-bar">
            <input
              type="text"
              placeholder="Поиск по имени..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <ToDoList
            todos={filteredTodos}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            listWidth={listWidth} setListWidth={setListWidth} resizing={resizing} setResizing={setResizing}
          />

          <Todos />
          <div className="add-todo">
            <input
              type="text"
              placeholder="Добавить новую заметку..."
              value={newTodo}
              onChange={handleInputChange}
            />
            <button onClick={handleAddTodo}>Добавить</button>
          </div>
        </div>
        <div className="todoActive">
          <ActiveToDo />
        </div>
        <DraggableDiv listWidth={listWidth} setListWidth={setListWidth} listWidthSize={listWidthSize} />
      </div>
    </TodosProvider>
  );
}

export default App;
