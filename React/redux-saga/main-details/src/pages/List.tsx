import { useEffect } from 'react';

import { selectors } from '../redux/selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Cards from '../components/Cards';
import ShowError from '../components/ShowError';
import Loading from '../components/Loading';
import { actions } from '../redux/actions';

const List = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectors.items.data);
  const loading = useAppSelector(selectors.items.loading);
  const error = useAppSelector(selectors.items.error);

  useEffect(() => {
    dispatch(actions.items.request());
    // console.log('Run action itemsRequest', loading);
  }, []);

  // console.log(`filter=${filter}, loading=${loading}`);
  // console.log('datalist=', dataList);
  // console.log('dataSearch=', dataSearch);
  // console.log('dataFavorites=', dataFavorites);

  return (
    <>
      <section className='d-flex align-items-center text-center justify-content-center'>
        {error && <ShowError message={`${error}`} />} 
        {loading && <Loading message='Получение списка услуг...' />} 

        {!(loading || error) && (items) && <Cards data={items}/>}
      </section>
    </>
  )
}

export default List;
