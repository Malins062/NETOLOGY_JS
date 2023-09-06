import { Route, Routes } from 'react-router';
import Menu from './components/Menu';
import ListPosts from './components/ListPosts';
import NewPost from './components/NewPost';
import Post from './components/Post';
import Page404 from './components/Page404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const postsInterval: number = import.meta.env.VITE_INTERVAL_POSTS ? import.meta.env.VITE_INTERVAL_POSTS : 5; 
const postsUrl: string = import.meta.env.VITE_POSTS_URL;

function App() {

  return (
    <>
      <Menu />
      <div>
          <div className='container mt-2'>
            <Routes>
              <Route index element={<ListPosts/>}/>
              <Route path='/posts'>
                <Route path='new' element={<NewPost/>} />
                <Route path=':postId' element={<Post/>} />
              </Route>
              <Route path='*' element={<Page404 message='Страница не найдена!'/>} />
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
export {postsUrl, postsInterval};
