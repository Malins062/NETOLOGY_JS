import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App url={url} />
  </React.StrictMode>,
)
