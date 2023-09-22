import { ShortFilm } from '../entities/Film/model';
import { ShortCard } from './ShortCard';

const Catalog = ({ data }: { data: ShortFilm[] }) => {

  return (
    <>
      <div className='row justify-content-center mt-2'>
        {
          (data.length > 0) && data.map((item, index) => <ShortCard card={item} key={index}/>)
        }
    </div> 
    </>
  )
}

export default Catalog;