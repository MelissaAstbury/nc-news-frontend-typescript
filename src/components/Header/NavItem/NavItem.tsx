import { NavLink } from 'react-router-dom';
import './NavItem.scss';

interface Props {
    link: string,
    exact: boolean,
    children: React.ReactNode
}

const NavItem: React.FC<Props> = ({link, exact, children}) => {
  return (
    <li className="nav-item">
      <NavLink
        to={link}
        exact={exact}
        activeClassName="nav-item active"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
