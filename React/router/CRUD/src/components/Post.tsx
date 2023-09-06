import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { postsUrl } from '../App';
import Loading from './Loading';
import Page404 from './Page404';
import { setData } from './hooks/usePolling';

interface PostData {
    id: number,
    content: string,
    created: string,
    name?: string,
    avatar?: string,
}

const InitPost = {
    id: 0,
    content: '',
    created: ''
}

const Post = () => {
    const [post, setPost] = useState(InitPost);
    const [loading, setLoading] = useState(true);
    const [removing, setRemoving] = useState(false);
    const [saving, setSaving] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [hasError, setError] = useState(false);

    const [acceptSave, setAcceptSave] = useState(false);
    const [textPost, setTextPost] = useState(post.content);
      
    const { postId } = useParams();
    const navigate = useNavigate();

    const loadingText = `Загрузка поста #${postId}...`;
    const removingText = `Удаление поста #${postId}...`;
    const savingText = `Сохранение поста #${postId}...`;
    const errorText = `Пост #${postId} - не найден!`;

    // Функция запроса на сервер для получения поста
    const fetchPost = async (id: string) => {
        const response = await fetch(`${postsUrl}/${id}`);
        if (!response.ok) {
            setError(true);
            throw new Error('Ошибка получения данных с сервера!');
        }
        const { post } = await response.json();
        if (post) {
            setPost(post);
            setTextPost(post.content);
         } else { 
            setError(true);
         }
    }

    // Обработчик изменения текущего поста
    const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setEdit(true);
    }

    // Обработчик возврата в предыдущее окно
    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setEdit(false);
        setTextPost(post.content);
    }

    // Обработка сохранения имзененного поста
    const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setSaving(true);

        const body = { id: post.id, content: textPost };
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'applicaton/json'
            },
            body: JSON.stringify(body)
        }; 

        setData(`${postsUrl}/${post.id}`, params)
            .then(() => {
                setSaving(false); 
                navigate('/');
            })
            .catch(e => {
                setSaving(false); 
                console.error(e);
            });
    }

    // Проверка на правильный валидный текст поста
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setAcceptSave(!(value === post.content));
        setTextPost(value);
    }  

    // Обработчик удаления текущего поста
    const handleRemovePost = (event: React.FormEvent) => {
        event.preventDefault();

        setRemoving(true);
        const params = { method: 'DELETE' }; 

        setData(`${postsUrl}/${postId}`, params)
            .then(() => {
                setRemoving(false); 
                navigate('/');
            })
            .catch(e => {
                setRemoving(false); 
                console.error(e);
            });
    }
    
    useEffect(() => {
        postId && fetchPost(postId)
            .then(() => {
                setLoading(false);
            })
            .catch(e => {
                console.error(e);
                setLoading(false);
                setError(true)
            });
        return () => {}
    }, [postId]);

    return (
        <>
            {loading && <Loading message={loadingText}/>}
            {removing && <Loading message={removingText}/>}
            {saving && <Loading message={savingText}/>}
            {hasError && <Page404 message={errorText}/>}

            {!loading && post.content &&
                <div className='card-post card'>

                    <div className='card-header d-flex justify-content-between align-items-center'>
                        <span className='badge bg-secondary'>{post.created}</span>
                            
                        {!isEdit ?
                            <Link to={'/'}>
                                <button type='button' className='btn-close' aria-label='Close'></button>
                            </Link>
                            :
                            <button type='button' className='btn-close' aria-label='Close' onClick={handleClose}></button>
                        }
                    </div>      

                    <div className='card-body'>
                        <form>

                            <input type='text' 
                                className='form-control mb-3' 
                                id='post' 
                                value={textPost}
                                onChange={handleChange}
                                placeholder='Текст поста'
                                readOnly={!isEdit}/>
                            
                            <div className='d-flex justify-content-end'>
                                {!isEdit ? 
                                    <>
                                        <button type='button' 
                                            className='btn btn-success mx-2'
                                            onClick={handleEdit}
                                            >Изменить</button>

                                        <button type='button' 
                                            className='btn btn-danger'
                                            onClick={handleRemovePost}
                                            >Удалить</button>
                                    </>
                                    :
                                    <button type='button' 
                                        className='btn btn-success mx-2'
                                        onClick={handleSave}
                                        disabled={!acceptSave}
                                        >Сохранить</button>
                                }
                            </div>
                        
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export { Post as default, InitPost};
export type { PostData };