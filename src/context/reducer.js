export const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  filtered: null,
  activeTodo: null,
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD__TODO":
      console.log(action.payload)
      const newState = { title: '', id: action.payload, status: 'waiting' };
      localStorage.setItem('todos', JSON.stringify(newState))
      return { ...state, todos: [...state.todos, newState], activeTodo: newState };
    case "REMOVE__TODO":
      const removeTodo = state.todos.filter((todo) => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(removeTodo))
      return {
        ...state,
        activeTodo: null,
        todos: [...removeTodo],
      };
    case "SELECT__TODO":
      const [selectTodo] = state.todos.filter((todo) => todo.id === action.payload)
      return { ...state, activeTodo: selectTodo };
    case 'FILTER__TODOS':
      return {
        ...state,
        filtered:
          state
            .todos
            .filter(todo => todo
              .title
              .toLowerCase()
              .includes(action.payload))
      }
    case 'CLEAR__FILTER':
      return {
        ...state,
        filtered: null
      }
    case 'UNSELECT__TODO':
      return {
        ...state,
        activeTodo: null
      }
    case "CHANGE__TODO":
      const newTodo = state.todos.map(todo => {
        if (action.payload.id === todo.id) {
          return action.payload
        }
        return todo;
      })
      localStorage.setItem('todos', JSON.stringify(newTodo))
      return { ...state, todos: newTodo };
    default:
      return state;
  }
}