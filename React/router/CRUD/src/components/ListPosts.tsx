import { Link } from 'react-router-dom';
import ItemPost from './ItemPost';
import Loading from './Loading';
import { usePolling } from './hooks/usePolling';
import { postsInterval, postsUrl } from '../App';

export const ListPosts = () => {

    const [{data, isLoading, hasError}] = usePolling(postsUrl, postsInterval, []);
    // console.log(`List: ${url}, ${interval}, ${isLoading}, ${hasError}`);
    if (hasError) {
      console.log(`Ошибка при загрузке списка постов! Адрес: ${postsUrl}`);
      console.error(hasError);
    }
    
    return (
        <>
          {isLoading && <Loading message='Загрузка списка постов...'/>}
          <div className='row justify-content-center'>
            {
              data.map((item) => 
                <div className='row mb-2' key={item.id}>
                  <Link to={`/posts/${item.id}`}>
                    <ItemPost data={item}/>
                  </Link>
                </div>
              )
            }
        </div> 
    </>
  )
}

export default ListPosts;
