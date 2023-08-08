import Note from '../Note/Note';
import { TNote } from '../Notes';

const ListNotes = ({ data, onRemove }: { data: Array<TNote>, onRemove: (event: React.MouseEvent<HTMLOrSVGElement>) => void }) => {
  return (
    <>
        <div className='row'>
            {
              data.map((item) => 
                <div 
                  className='col-md-4 mb-4' 
                  key={item.id}
                >
                  <Note 
                    note={item}
                    onRemove={onRemove}
                  />
                </div>
              )
            }
        </div> 
    </>
  )
}

export default ListNotes;
