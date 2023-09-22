import { Link } from 'react-router-dom';
import { ShortFilm } from '../entities/Film/model';
import FavoriteIcon from './FavoriteIcon';

export const ShortCard = ({ card }: { card: ShortFilm }) => {
  const cardStyle = {
    width: '18rem',
  }

  const handleClickCard = (e: React.MouseEvent) => {
    e.preventDefault();
  }

  return (
    <>
      <div 
        className='card bg-form p-2 m-2' 
        style={cardStyle}
        onClick={handleClickCard}
      >
        <img src={card.Poster} className='card-img-top' alt='Обложка фильма отсутствует'/>
        
        <div className='card-body'>
          <h5 className='card-title'>Название фильма: {card.Title}</h5>
          <p className='card-text'>Год выпуска: {card.Year}</p>
          <p className='card-text'>Тип: {card.Type}</p>
        </div>

        <div className='card-footer bg-transparent'>
          <Link to={`/cards/${card.imdbID}`}>
            <button type='button'
              className='btn btn-detail' 
              title='Вывести подробную информацию о фильме...'>
              Подробнее...
            </button>
          </Link>
        </div>

        <FavoriteIcon card={card} />
      </div>

    </>
  )
}
