export const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  filtered: null,
  activeTodo: null,
}

export function reducer(state, action) {
  switch (action.type) {
    case "ADD__TODO":
      const newState = [...state.todos, action.todo];
      localStorage.setItem('todos', JSON.stringify(newState))
      return { ...state, todos: [...state.todos, action.todo] };
    case "REMOVE__TODO":
      const removeTodo = state.todos.filter((todo) => todo.id !== action.payload)
      console.log(action)
      localStorage.setItem('todos', JSON.stringify(removeTodo))
      return { ...state, todos: [...removeTodo] };
    case 'FILTER__TODOS':
      return {
        ...state,
        filtered: state.todos.filter(todo => todo.title.toLowerCase().includes(action.payload))
      }
    case 'CLEAR__FILTER':
      return {
        ...state,
        filtered: null
      }
    case "CHANGE__TODO":
      return state.filter((todo) => todo.id !== action.todo.id);
    default:
      return state;
  }
}