import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { actions } from '../redux/actions';
import { selectors } from '../redux/selectors';
import ShowError from './ShowError';
import { Items } from './Items';
import { Spinner } from './Spinner';

const Searcher = () => {
  const dispatch=useAppDispatch();
  const items = useAppSelector(selectors.search.items);
  const loading = useAppSelector(selectors.search.loading);
  const searchValue = useAppSelector(selectors.search.value);
  const error = useAppSelector(selectors.search.error);

  const validateSearchValue = (searchValue.trim().length > 0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(actions.search.changeSearch(value));
    dispatch(actions.search.clearItems());
  }  

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(actions.search.changeSearch(''));
  }

  // console.log(`items=${items}, loading=${loading}`)
  return (
    <>
      { error && <ShowError message={error} /> }
      <div className='mt-4 sticky-top p-2 search-form bg-form'>
        <form onReset={handleReset}>

          <div className='d-flex flex-wrap'>
            <div className='form-group flex-grow-1 p-2'>
              <input 
                type='search' 
                className={`${validateSearchValue ? 'is-valid' : 'is-invalid'} form-control`} 
                id='searchInputFilm'
                value={searchValue}
                onChange={handleChange}
                placeholder='Искомый навык'
              />
              { loading && <Spinner /> }
              <div className='invalid-feedback'>Необходимо ввести значение для поиска</div>
              { !error && <Items data={items} /> }
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default Searcher;
