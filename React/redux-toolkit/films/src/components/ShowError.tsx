import { useState } from 'react';

const ShowError = ({ message }: { message: string }) => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      {toggle ?  null : 
        <div className='alert alert-danger d-flex justify-content-center flex-column bg-form error-window' role='alert'>
          <div className='d-flex justify-content-end'>
            <button 
              type='button' 
              className='btn-close' 
              aria-label='Закрыть'
              title='Закрыть окно'
              onClick={() => setToggle(!toggle)}
            >
            </button>
          </div>
          <div className='fs-5'>
            {message}
          </div>
        </div>
      }
    </>
  )
}

export default ShowError;
