import { Listing } from './components/Listing';

import data from './data/etsy.json';

function App() {
  return (
    <>
      <Listing items={data}/>
    </>
  )
}

export default App
