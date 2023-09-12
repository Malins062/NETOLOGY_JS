import { useDispatch, useSelector } from 'react-redux'
import { ActionTypes } from '../redux/actions';
import { IRootState } from '../redux/store';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state: IRootState)  => state.filter.value);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.SET_FILTER_VALUE,
      payload: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='form-group col-md-12'>
            <input 
              type='text' 
              className='form-control'
              id='filter' 
              name='filter'
              value={filterValue}
              onChange={handleChange}
              placeholder='Введите значение фильтра ремонтных работ'
            />
        </div>
      </div>
    </form>
  )
}
  
export default Filter;