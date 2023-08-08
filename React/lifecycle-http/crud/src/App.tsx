import Notes from './components/Notes/Notes'

const urlServer='http://localhost:7070/notes';

function App() {
  return (
    <>
      <Notes 
        url={urlServer}
      />
    </>
  )
}

export default App
