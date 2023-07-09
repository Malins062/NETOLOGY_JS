import { useState } from 'react'

export const DropDownList = () => {
    const items = [
        'Profile Information',
        'Change Password',
        'Become PRO',
        'Help',
        'Log Out',
    ];
 
    const [element, setElement] = useState('');
    const onClickElement = (e) => {
      setElement(e)
    }

  return (
    <>
        <ul data-id='dropdown' className='dropdown'>
            {items.map((item, index) => {
                return (
                    <li 
                        className={element === item ? 'active' : ''}
                        key={index}
                    >
                        <a
                            onClick={() => {onClickElement(item)}}
                            href='#'>
                            {item}
                        </a>
                    </li>
                );
            })}
        </ul>
    </>
  )
}

export default DropDownList
