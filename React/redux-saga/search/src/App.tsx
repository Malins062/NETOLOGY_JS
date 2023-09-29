import { Provider } from 'react-redux';
import MainPage from './components/MainPage';
import { store } from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </>
  )
}

export default App;
