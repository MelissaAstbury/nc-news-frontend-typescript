import './Header.scss';
import NavItem from './NavItem/NavItem';

const Header: React.FC = () => {
  return (
    <header>
      <h1>NC-News</h1>
      <div className="nav-items">
        <p>option 1</p>
        <p>option 2</p>
        <p>option 3</p>
        {/* <NavItem>Option 1</NavItem>
        <NavItem>Option 2</NavItem>
        <NavItem>Option 3</NavItem> */}
      </div>
    </header>
  );
};

export default Header;