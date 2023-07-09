import { useState } from 'react'

import IconSwitch from './js/IconSwitch';
import CardsView from './js/CardsView';
import ListView from './js/ListView';

import { products } from './data/data'

import './Store.css'

// Иконки
const ICONS = [
  'view_list',
  'view_module',
];

function Store() {

  const [view, setView] = useState(false);
  
  const SwitchView = () => {
    setView(!view);
  }

  return (
    <>
      <IconSwitch icon={view ? ICONS[0] : ICONS[1]} onSwitch={(view) =>  SwitchView(view)}/>
      {
        view ? <CardsView cards={products}/> : <ListView items={products} />
      }
    </>
  )
}

export default Store
