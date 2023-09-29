import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { selectors } from '../redux/selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import ShowError from '../components/ShowError';
import DetailsCard from '../components/DetailsCard';
import { actions } from '../redux/actions';
import Loading from '../components/Loading';

const Item = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const card = useAppSelector(selectors.item.data);
  const loading = useAppSelector(selectors.item.loading);
  const error = useAppSelector(selectors.item.error);

  useEffect(() => {
    params.itemId && dispatch(actions.item.request(params.itemId));
  }, [params.itemId]);  

  return (
    <>
      <section className='d-flex align-items-center text-center justify-content-center'>
        {error && <ShowError message={`${error}`} />} 
        {loading && <Loading message='Получение описания услуги...' />} 

        {!(loading || error) && (card) && <DetailsCard card={card}/>}
      </section>
    </>
  )
}

export default Item;
