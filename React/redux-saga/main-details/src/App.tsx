import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import { store } from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
