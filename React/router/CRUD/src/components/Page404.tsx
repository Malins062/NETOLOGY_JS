import { Link } from 'react-router-dom';

const Page404 = ({message}: {message: string}) => {
  return (
    <div className='alert alert-danger' role='alert'>
      {message}
      <Link to={'/'}>
        <span className='badge text-bg-danger mx-2'>Перейти на главную станицу</span>
      </Link>
    </div>
  )
}

export default Page404;
