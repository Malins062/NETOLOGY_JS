import { ShortService } from '../entities/Service/model';
import { ShortCard } from './ShortCard';

const Cards = ({ data }: { data: ShortService[] }) => {

  return (
    <>
      <div className='row justify-content-center mt-2'>
        {
          (data.length > 0) && data.map((item) => <ShortCard card={item} key={item.id}/>)
        }
    </div> 
    </>
  )
}

export default Cards;