export const addTodo = () => { return { type: "ADD__TODO", payload: Math.floor(Math.random() * 1000), } };
export const filterTodos = (text) => { return { type: 'FILTER__TODOS', payload: text } };
export const clearFilter = () => { return { type: 'CLEAR__FILTER' } };
export const unselectTodo = () => { return { type: "UNSELECT__TODO" } };
export const removeTodo = (id) => { return { type: "REMOVE__TODO", payload: id, } };
export const selectTodo = (id) => { return { type: "SELECT__TODO", payload: id, } };
export const changeTodo = (todo) => { return { type: "CHANGE__TODO", payload: todo, } };
