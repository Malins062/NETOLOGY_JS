import { Route, Routes } from 'react-router';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

function App() {

  return (
    <>
      <Menu />
      <div>
          <div className='page'>
            <Routes>
                  <Route index element={<HomePage/>} />
                  <Route path='/drift' element={<DriftPage/>} />
                  <Route path='/timeattack' element={<TimeAttackPage/>} />
                  <Route path='/forza' element={<ForzaPage/>} />
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App
