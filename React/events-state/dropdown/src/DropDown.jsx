import { useState } from 'react'
import DropDownList from './js/DropDownList'
import './DropDown.css'

function DropDown() {
  const [state, setState] = useState('');
  const onClickDropDown = () => {
    state ? setState('') : setState('open');
  }

  return (
    <>
      <div className='container'>
        <div data-id='wrapper' className={'dropdown-wrapper ' + state}>
          <button
            data-id='toggle'
            className='btn'
            onClick={() => onClickDropDown()}
          >
            <span>Account Settings</span>
            <i className='material-icons'>public</i>
          </button>

          <DropDownList />
        </div>
      </div>
    </>
  )
}

export default DropDown
