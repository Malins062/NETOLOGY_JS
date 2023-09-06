const Loading = ({message}: {message: string}) => {
  return (
    <>
      <div className='loading-process'>
        <h5>
          <span className='badge bg-secondary'>
            <span className='spinner-grow spinner-grow-sm mx-2' role='status' aria-hidden='true'></span>
            {message}
          </span>
        </h5>
      </div>
    </>
  )
}

export default Loading;
