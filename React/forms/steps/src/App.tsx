import JurnalLog, { TDataList } from './components/JurnalLog/JurnalLog'

const data: TDataList[] = [
  {
    date: '20.07.2019',
    distance: '5.7',
    id: '1',
  },
  {
    date: '18.07.2019',
    distance: '14.2',
    id: '2',
  },
  {
    date: '19.07.2019',
    distance: '3.4',
    id: '5',
  },
  {
    date: '31.12.2023',
    distance: '1.1',
    id: '3',
  },
];

function App() {
  return (
    <>
      <JurnalLog dataList={data}/>
    </>
  )
}

export default App;
