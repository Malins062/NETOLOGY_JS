import { useEffect } from 'react';

import { selectors } from '../redux/selectors';
import { fetchCatalog } from '../redux/catalogSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Catalog from '../components/Catalog';
import Searcher from '../components/Searcher';
import ShowError from '../components/ShowError';
import { FETCH_STATUS } from '../redux/api';

const Search = () => {
  const dispatch = useAppDispatch();
  const dataSearch = useAppSelector(selectors.catalog.data);
  const dataFavorites = useAppSelector(selectors.favorites.data);
  const filter = useAppSelector(selectors.catalog.filter);
  const loading = useAppSelector(selectors.catalog.loading);
  const error = useAppSelector(selectors.catalog.error);

  const dataList = filter 
    ? dataSearch.map((item) => {
        return {
          ...item,
          isFavorite: (dataFavorites.filter((favItem) => favItem.imdbID === item.imdbID).length > 0) ? true : false
        }
      })
    : [];

  useEffect(() => {
    filter && dispatch(fetchCatalog(filter));
  }, [filter]);

  // console.log(`filter=${filter}, loading=${loading}`);
  // console.log('datalist=', dataList);
  // console.log('dataSearch=', dataSearch);
  // console.log('dataFavorites=', dataFavorites);

  return (
    <>
      <section className='d-flex align-items-center text-center justify-content-center'>
        <Searcher />
      </section>
      
      <section className='d-flex align-items-center text-center justify-content-center'>
        {error && <ShowError message={`${FETCH_STATUS.FAILED} ${error}`} />} 
        {!(loading || error) && (dataList) && <Catalog data={dataList}/>}
      </section>
    </>
  )
}

export default Search;
