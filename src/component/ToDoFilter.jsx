import { useContext, useEffect, useState } from 'react'
import { TodosContext } from '../context';
import { clearFilter, filterTodos } from '../context/actions';

const TodoFilter = () => {
  const [, dispatch] = useContext(TodosContext);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue.trim() !== '') {
      console.log('yes')
      dispatch(filterTodos(searchValue));
    } else {
      dispatch(clearFilter());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);


  return (
    <div className="searchBar">
      <h3>Seacrh ToDo</h3>
      <input
        value={searchValue}
        type='text'
        placeholder='Filter Todos'
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default TodoFilter
