import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actions } from '../redux/actions';
import { selectors } from '../redux/selectors';

const Searcher = () => {
  const dispatch=useAppDispatch();
  const loading = useAppSelector(selectors.catalog.loading);
  const filter = useAppSelector(selectors.catalog.filter);

  const [searchName, setSearchName] = useState(filter);
  const validateSearchName = () => ((searchName.trim().length > 0));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchName(value);
  }  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(actions.catalog.filter(searchName));
  }

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchName('');
  }

  return (
    <>
      <div className='mt-4 sticky-top p-2 search-form bg-form'>
        <form 
          onSubmit={handleSubmit}
          onReset={handleReset}
        >

          <div className='d-flex flex-wrap'>
            <div className='form-group flex-grow-1 p-2'>
              <input 
                type='text' 
                className='form-control' 
                id='searchInputFilm'
                value={searchName}
                onChange={handleChange}
                disabled={loading}
                placeholder='Введите поисковый запрос'
              />
            </div>

            <div className='form-group p-2'>
              <button type='submit' 
                className='btn btn-success search-button me-2'
                disabled={!validateSearchName() && !loading}
              >
                { loading 
                  ? <span className='spinner-border spinner-border-sm me-2' role='status' aria-hidden='true'></span>
                  : <span className='me-2'><FaIcons.FaSearch/></span>
                }
                Поиск
              </button>
              <button type='reset' className='btn btn-danger'>Очистить</button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default Searcher;
