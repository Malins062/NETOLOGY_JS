import MenuLink from './MenuLink';

const Menu = () => {
  return (
    <>
      <nav className='menu'>
        <MenuLink to='/'>Главная</MenuLink>
        <MenuLink to='/drift'>Дрифт-такси</MenuLink>
        <MenuLink to='/timeattack'>Time Attack</MenuLink>
        <MenuLink to='/forza'>Forza Karting</MenuLink>
      </nav>
    </>
  )
}
  
export default Menu;
