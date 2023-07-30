export const initialState = localStorage.getItem('todos') || [];


export function reducer(state, action) {
  switch (action.type) {
    case "ADD__TODO":
      return [...state, action.todo];
    case "REMOVE__TODO":
      return state.filter((todo) => todo.id !== action.todo.id);
    case "CHANGE__TODO":
      return state.filter((todo) => todo.id !== action.todo.id);
    default:
      return state;
  }
}