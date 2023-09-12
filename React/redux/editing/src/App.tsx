
import WorksList from './components/WorksList/WorksList';
import Filter from './components/Filter';
import FormData from './components/FormData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <>
      <div className='container mt-2'>
        <Filter/>
        <FormData/>
        <WorksList/>
      </div>
    </>
  )
}

export default App;
