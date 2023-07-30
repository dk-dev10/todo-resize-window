export const addTodo = (todo) => { return { type: "ADD__TODO", todo, } };
export const filterTodos = (text) => { return { type: 'FILTER__TODOS', payload: text } };
export const clearFilter = () => { return { type: 'CLEAR__FILTER' } };
export const removeTodo = (id) => { return { type: "REMOVE__TODO", payload: id, } };
