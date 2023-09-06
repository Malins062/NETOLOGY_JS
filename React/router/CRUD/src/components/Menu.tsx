import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <form className='container-fluid justify-content-end'>
          <Link to='/posts/new'>
            <button className='btn btn-primary me-2' type='button'>
              Создать пост
            </button>
          </Link>
        </form>
      </nav>
    </>
  )
}
  
export default Menu;
