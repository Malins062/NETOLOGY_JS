import { TNote } from '../Notes';

import './Note.css';

export const Note = ({ note, onRemove }: { note: TNote, onRemove: (event: React.MouseEvent<HTMLOrSVGElement>) => void }) => {
  
  return (
    <div className='card' key={note.id}>
      
      <button 
        className='d-flex align-items-center btn-notes btn-notes-close'
        data-id={note.id}
        onClick={onRemove}
        title='Remove note'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' 
          className='bi bi-x text-danger' viewBox='0 0 16 16'>
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
        </svg>
      </button>

      <div className='card-body'>
        <p className='card-text'>{note.content}</p>
      </div>
    
    </div>
  )
}

export default Note;
