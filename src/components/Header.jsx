import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import CartIcons from './CartIcons';
import Logo from './Logo';
import SearchBox from './SearchBox';
import { useAppContext } from '../context/appContext';
import Sidebar from './Sidebar';
import MobileSearchBox from './MobileSearchBox';

const Header = () => {
  const { isSidebarOpen, openSidebar, closeSidebar, isMobileSearchBoxOpen } =
    useAppContext();
  return (
    <HeaderWrapper className="py-2">
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="container">
        <MobileSearchBox />
        <FaBars className="toggle-sidebar-btn" onClick={openSidebar} />
        <Logo />
        <SearchBox />
        <CartIcons />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background: var(--clr-white);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    position: relative;
  }
  .toggle-sidebar-btn {
    cursor: pointer;
    color: var(--primary-color);
    font-size: 2.4rem;
  }
  @media (min-width: 768px) {
    .toggle-sidebar-btn {
      display: none;
    }
  }
`;

export default Header;
