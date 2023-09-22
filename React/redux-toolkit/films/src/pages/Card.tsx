import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { selectors } from '../redux/selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import ShowError from '../components/ShowError';
import { FETCH_STATUS } from '../redux/api';
import { fetchCard } from '../redux/cardSlice';
import DetailsCard from '../components/DetailsCard';

const Card = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const dataFavorites = useAppSelector(selectors.favorites.data);
  const card = useAppSelector(selectors.card.data);
  const loading = useAppSelector(selectors.card.loading);
  const error = useAppSelector(selectors.card.error);


  const detailsCard = !card ? card :
    {
      ...card,
      isFavorite: (card && dataFavorites.filter((favItem) => favItem.imdbID === card.imdbID).length > 0) ? true : false
    };

  useEffect(() => {
    params.cardId && dispatch(fetchCard(params.cardId));
  }, [params.cardId]);

  return (
    <>
      { loading  && 
        <div className='text-center align-items-center error-window'>
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Загрузка...</span>
          </div>
        </div>
      }

      <section className='d-flex align-items-center text-center justify-content-center'>
        {error && <ShowError message={`${FETCH_STATUS.FAILED} ${error}`} />} 
        {!(loading || error) && (card) && <DetailsCard card={detailsCard}/>}
      </section>
    </>
  )
}

export default Card;
