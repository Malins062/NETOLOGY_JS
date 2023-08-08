import { TWatches, Watches } from './components/Watches/Watches'

const watches: Array<TWatches> = [
  {
    id: '1',
    title: 'Moscow',
    offset: 180,
  },
  {
    id: '2',
    title: 'London',
    offset: 60,
  },
  {
    id: '3',
    title: 'Japan',
    offset: 540,
  },
]

function App() {
  return (
    <>
      <Watches 
        data={watches}
      />
    </>
  )
}

export default App
