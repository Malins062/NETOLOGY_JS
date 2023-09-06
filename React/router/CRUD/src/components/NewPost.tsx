import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postsUrl } from '../App';
import Loading from './Loading';
import { setData } from './hooks/usePolling';

const NewPost = () => {
  const [acceptSave, setAcceptSave] = useState(true);
  const [textPost, setTextPost] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Обработка сохранения нового поста
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const body = { id: 0, content: textPost };
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json'
      },
      body: JSON.stringify(body)
    }; 

    setData(postsUrl, params)
      .then(() => {
        setLoading(false); 
        navigate('/');
      })
      .catch(e => {
        setLoading(false); 
        console.error(e);
      });
  }

  // Проверка на правильный валидный текст поста
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTextPost(value);
    setAcceptSave((value.trim().length === 0));
  }  
  
  return (
    <>
      {loading && <Loading message='Добавление нового поста...'/>}

      <div className='card-post card'>

        <div className='card-header d-flex justify-content-end align-items-center'>
          <Link to={'/'}>
            <button type='button' className='btn-close' aria-label='Close'></button>
          </Link>
        </div>      

          <div className='card-body'>
            <form onSubmit={handleSubmit}>

              <input type='text' 
                className='form-control mb-3' 
                id='post' 
                onChange={handleChange}
                value={textPost}
                placeholder='Текст нового поста' 
                required
                autoFocus/>
              
              <div className='d-flex justify-content-end'>
                <button type='submit' 
                  className='btn btn-success'
                  disabled={acceptSave}
                  >Опубликовать</button>
              </div>
            
            </form>
          </div>
      </div>
    </>
  )
}

export default NewPost;
