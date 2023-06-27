import { Calendar } from './components/Calendar';

import './App.css'

function App() {
  const now = new Date();
  // const now = new Date(2017, 2, 8);
  // const now = new Date(2017, 1, 28);

  return (
    <>
      <Calendar date={now} />
    </>
  )
}

export default App
