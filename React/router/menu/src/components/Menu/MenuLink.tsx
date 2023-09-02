import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const MenuLink = ({ children, to, ...props }: {children: any, to: string}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={match ? 'menu__item-active' : 'menu__item'}
      {...props}
    >
      {children}
    </Link>
  );
}

export default MenuLink;