import * as FaIcons from 'react-icons/fa';
import { ShortFilm } from '../entities/Film/model';
import { useAppDispatch } from '../redux/hooks';
import { actions } from '../redux/actions';
import { useState } from 'react';

const FavoriteIcon = ({ card }: { card: ShortFilm }) => {
  const dispatch=useAppDispatch();
  const [toggleFavorite, setToggleFavorite] = useState(card.isFavorite);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleFavorite ? actions.favorites.remove(card) : actions.favorites.add(card));
    setToggleFavorite(!toggleFavorite);
  }

  return (
    <>
      <span 
        className='icon-favorite fs-2'
        onClick={handleClick}
        title={toggleFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      >
        {toggleFavorite ? <FaIcons.FaStar/> : <FaIcons.FaRegStar/>}
      </span>
    </>
  )
}

export default FavoriteIcon;
