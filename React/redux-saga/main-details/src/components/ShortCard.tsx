import { Link } from 'react-router-dom';
import { ShortService } from '../entities/Service/model';

export const ShortCard = ({ card }: { card: ShortService }) => {
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
        <div className='card-body'>
          <h5 className='card-title'>{card.name}</h5>
          <p className='card-text'>Стоимость: {card.price}</p>
        </div>

        <div className='card-footer bg-transparent'>
          <Link to={`/${card.id}/details/`}>
            <button type='button'
              className='btn btn-detail' 
              title='Вывести подробную информацию об услуге...'>
              Подробнее...
            </button>
          </Link>
        </div>

      </div>

    </>
  )
}
