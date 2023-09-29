import { Route, Routes } from 'react-router';
import List from '../pages/List';
import Item from '../pages/Item';

const NavPage = () => {
  return (
    <>
    <section>
      <Routes>
        <Route path='/' index element={<List />}/>
        <Route path='/:itemId/details' element={<Item />}/>
      </Routes>
    </section>
    </>
  )
}

export default NavPage;
