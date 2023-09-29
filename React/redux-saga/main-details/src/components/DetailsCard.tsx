import { DetailsService } from '../entities/Service/model';
import { useNavigate } from 'react-router';
import ShowError from './ShowError';

const DetailsCard = ({ card }: { card: DetailsService | undefined }) => {
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
            <div className='col-md-8 text-start'>
                <div className='card-header bg-transparent'>
                  <h5 className='card-title'>{`#${card.id} - ${card.name}`}</h5>
                </div>
                <div className='card-body'>
                <p className='card-text'>
                  <span>Стоимость: {card.price}.</span><br/>
                  <span>Описание: {card.content}.</span><br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default DetailsCard;
