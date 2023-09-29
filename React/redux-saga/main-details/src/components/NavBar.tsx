import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { NavData } from '../data/NavData';
import { useAppSelector } from '../redux/hooks';
import { selectors } from '../redux/selectors';

const NavBar = () => {
  const activeLink = 'nav-link active d-flex justify-content-center align-items-center';
  const normalLink = 'nav-link d-flex justify-content-center align-items-center';
  
  const loading = useAppSelector(selectors.items.loading);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  const handleClick = (e: React.MouseEvent) => {
    if (loading) {
      e.preventDefault();
    } 
  }

  return (
    <>
    <section>
      <nav className='navbar navbar-expand-md navbar-light sticky-top pb-2 bg-form' id='neubar'>
        <div className='container'>

          <div className='navbar-brand d-flex align-middle'>
            <span>Список услуг</span>
          </div>

          <button className='navbar-toggler' type='button' 
            data-bs-toggle='collapse' 
            data-bs-target='#navbarSupportedContent' 
            aria-controls='navbarSupportedContent' 
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label='Toggle navigation'         
            onClick={handleNavCollapse}   
          >
            <span className='navbar-toggler-icon'></span>
          </button>
    
          <div className={`${isNavCollapsed ? 'collapse' : 'pt-3'} navbar-collapse`} id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto'>
              {
                NavData.map((item, index) => {
                  return (
                    <li 
                      className='nav-item mx-2 fw-medium' 
                      key={index}
                    >
                        <NavLink to={item.path}
                          className={({ isActive }) => 
                            isActive ? activeLink : normalLink
                          }
                          onClick={handleClick}
                        >
                          <span className='me-2 d-flex justify-content-center align-items-center'>{item.icon}</span>
                          <span className='me-2'>{item.title}</span>
                        </NavLink>
                    </li>  
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    </section>
    </>
  )
}

export default NavBar;
