import './RefreshNotes.css';

export const RefreshNotes = ({ onRefresh }: { onRefresh: (event: React.MouseEvent<HTMLOrSVGElement>) => void }) => {
  
    return (
      <header className='mb-2'>
        <div className='d-flex justify-content-start align-items-center'>
          <span className='fs-2 align-items-center justify-content-center'>Notes</span>
          <button 
            type='button'
            className='d-flex align-items-center mx-2 btn-notes btn-notes-refresh'
            onClick={onRefresh}
            title='Refresh notes'
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' 
                className='bi bi-arrow-repeat text-success' viewBox='0 0 16 16'
            >
                <path d='M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z'/>
                <path fillRule='evenodd' d='M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z'/>
            </svg>            
          </button>
        </div>
      </header>
    )
  }
  
  export default RefreshNotes;
  