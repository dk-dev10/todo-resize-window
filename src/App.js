import { useState } from 'react';


import './App.css';
import ActiveToDo from './view/ActiveToDo/ActiveToDo';
import DraggableDiv from './component/dragBox';
import { TodosProvider } from './context';
import Todos from './view/ToDos/Todos';
import TodoFilter from './component/ToDoFilter';

function App() {
  const [listWidth, setListWidth] = useState(300);
  const listWidthSize = {
    max: 1000,
    min: 250
  }

  return (
    <TodosProvider>
      <div className="app">
        <div className="todosWrapper" style={{
          width: `${listWidth}px`
        }} >
          <TodoFilter />
          <Todos />
        </div>
        <div className="todoActive">
          <ActiveToDo />
        </div>
        <DraggableDiv
          listWidth={listWidth}
          setListWidth={setListWidth}
          listWidthSize={listWidthSize}
        />
      </div>
    </TodosProvider>
  );
}

export default App;
