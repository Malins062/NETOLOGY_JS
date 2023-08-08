import Clock from './Clock/Clock';
import { TWatches } from './Watches';

const ListWatches = ({ data, onRemove }: { data: Array<TWatches>, onRemove: any }) => {
  return (
    <>
        <div className='row'>
            {
              data.map((item) => 
                <div className='col mb-2' key={item.id}>
                  <Clock 
                    data={item}
                    onRemove={onRemove}
                  />
                </div>
              )
            }
        </div> 
    </>
  )
}

export default ListWatches;
