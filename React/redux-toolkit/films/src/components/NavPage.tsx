import { Route, Routes } from 'react-router';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import Card from '../pages/Card';

const NavPage = () => {
  return (
    <>
    <section>
      <Routes>
        <Route path='/' index element={<Search />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/cards/:cardId' element={<Card />}/>
      </Routes>
    </section>
    </>
  )
}

export default NavPage;
