import { DetailsFilm } from '../entities/Film/model';
import FavoriteIcon from './FavoriteIcon';
import { useNavigate } from 'react-router';
import ShowError from './ShowError';

const DetailsCard = ({ card }: { card: DetailsFilm | undefined }) => {
  const navigate = useNavigate();

  const cardStyle = {
    width: '90%',
  }

  const handleCloseClick = () => {
    navigate('/');
  }

  return (
    <>
      {!card 
        ? <ShowError message='Карточка пуста' />
        : 
        <div className='card bg-form p-2 m-2' style={cardStyle}>

          <div className='d-flex justify-content-end m-2'>
            <button 
              type='button' 
              className='btn-close' 
              aria-label='Закрыть'
              title='Закрыть окно'
              onClick={handleCloseClick}
            >
            </button>
          </div>

          <div className='row g-0'>
            <div className='col-md-4'>
              <img src={card.Poster} className='img-fluid rounded-start' alt='Обложка фильма отсутствует'/>
            </div>
            <div className='col-md-8 text-start'>
                <div className='card-header bg-transparent'>
                  <h5 className='card-title'>{card.Title}</h5>
                </div>
                <div className='card-body'>
                <p className='card-text'>
                  <span>Год выпуска: {card.Year}.</span><br/>
                  <span>Тип: "{card.Type}".</span><br/>
                  <span>Жанр: "{card.Genre}".</span><br/>
                  <span>Продолжительность: "{card.Runtime}".</span><br/>
                  <span>Продолжительность: "{card.Runtime}".</span><br/>
                  <span>Режиссер: {card.Director}.</span><br/>
                  <span>Акитеры: {card.Actors}.</span><br/>
                  <span>Рейтинг: {card.imdbRating}.</span><br/>
                </p>
              </div>
            </div>
          </div>
          
          <FavoriteIcon card={card} />
        </div>
      }
    </>
  )
}

export default DetailsCard;
