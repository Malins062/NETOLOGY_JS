import { useEffect, useState } from 'react';
import { TNote } from '../Notes';

import './FormAddNote.css';

const FormAddNote = ({ data, state, onSubmit }: 
  { data: Array<TNote>, 
    state: TNote, 
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) => {
  
  const [newNote, setForm] = useState(state);
  
  // Функция валидации текста заметки
  const validate = () => !(newNote.content.trim() === '') && 
    !(data.find(item => item.content === newNote.content)?.content);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name,  value } = event.target;
    setForm({ ...newNote, [name]: value });
  }  

  useEffect(() => {
    setForm(state);
  }, [data]);
  
  return (
    <form 
      className='pb-2 mb-2'
      onSubmit={onSubmit}
    >
      <div className='row'>
        <div className='form-group col-md-8'>
          <div className='mb-3'>
            <label htmlFor='content' className='form-label'>New note</label>
            <textarea 
              className='form-control'
              id='content' 
              name='content'
              rows={6}
              value={newNote.content}
              onChange={handleChange}
              placeholder='Enter the text here...'
              autoFocus
              required
              />
          </div>          
        </div>
        <div className='col-md-1'>
          <button 
            type='submit' 
            className='d-flex align-items-center btn-notes btn-notes-send'
            disabled={!validate()}
            title='Add new note'
            >
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='bi bi-send-fill' viewBox='0 0 16 16'>
              <path d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z'/>
            </svg>
          </button>
        </div> 
      </div>
    </form>
  )
}

export default FormAddNote;
