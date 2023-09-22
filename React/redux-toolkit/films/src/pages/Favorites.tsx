import Catalog from '../components/Catalog';
import { useAppSelector } from '../redux/hooks';
import { selectors } from '../redux/selectors';

const Favorites = () => {
  const dataFavorites = useAppSelector(selectors.favorites.data);

  return (
    <>
      <section className='d-flex align-items-center text-center justify-content-center'>
        {(dataFavorites) && <Catalog data={dataFavorites}/>}
      </section>
    </>
  )
}

export default Favorites;
