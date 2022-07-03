import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const [activeTab, setActiveTab] = useState('category');
  return (
    <SidebarWrapper
      className={isSidebarOpen && 'active'}
      isSidebarOpen={isSidebarOpen}
    >
      <div className="sidebar-header">
        <Logo />
        <FaTimes onClick={closeSidebar} />
      </div>
      <div className="sidebar-tab">
        <p
          className={activeTab === 'category' && 'active'}
          onClick={() => setActiveTab('category')}
        >
          category
        </p>
        <p
          className={activeTab === 'menu' && 'active'}
          onClick={() => setActiveTab('menu')}
        >
          menu
        </p>
      </div>
      {activeTab === 'category' ? (
        <div>categories</div>
      ) : (
        <div className="menu-links">
          <Link to="/" onClick={closeSidebar}>
            home
          </Link>
          <Link to="/shop" onClick={closeSidebar}>
            shop
          </Link>
          <Link to="/about" onClick={closeSidebar}>
            about us
          </Link>
          <Link to="/contact" onClick={closeSidebar}>
            contact us
          </Link>
          <Link to="/register" onClick={closeSidebar}>
            Login/Register
          </Link>
        </div>
      )}
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 300px;
  background-color: white;
  box-shadow: var(--light-shadow);
  transition: all 0.3s linear;
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? `translateX(0)` : `translateX(-100%)`};
  padding: 1.8rem;
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    svg {
      font-size: 2.4rem;
      color: var(--secondary-color);
      cursor: pointer;
    }
  }
  .sidebar-tab {
    display: flex;
    align-items: center;
    p {
      text-transform: capitalize;
      color: var(--primary-color);
      padding-bottom: 4px;
      padding-right: 4px;
      cursor: pointer;
      &:first-of-type {
        margin-right: 50px;
      }
    }
    p.active {
      border-bottom: 3px solid var(--secondary-color);
      color: var(--secondary-color);
      font-weight: bold;
    }
  }
  .menu-links {
    display: flex;
    flex-direction: column;

    a {
      color: var(--text-color);
      text-transform: capitalize;
      margin: 0.5rem 0;
      display: block;
      transition: color 0.3s linear;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export default Sidebar;
