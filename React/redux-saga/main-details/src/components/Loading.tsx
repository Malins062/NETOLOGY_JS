const Loading = ({ message }: { message: string }) => {
  return (
    <>
      <div className='alert alert-warning d-flex justify-content-center align-items-center flex-column bg-form window' role='alert'>
        <div className='fs-5'>
          <span>{message}</span>
        </div>
      </div>
    </>
  )
}

export default Loading;
