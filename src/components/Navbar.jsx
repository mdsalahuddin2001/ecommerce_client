import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import Category from './Category';
const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="container">
        <div className="left">
          <div className="category">
            <span>
              <BiCategory /> All categories
            </span>
            <Category className="category-card" />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/shop">shop</Link>
            </li>
            <li>
              <Link to="/about">about us</Link>
            </li>
            <li>
              <Link to="/contact">contact us</Link>
            </li>
          </ul>
        </div>
        <div className="right flex-center">
          <Link to="/register">Login/Register</Link>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  background-color: var(--primary-color);
  color: white;
  display: none;
  z-index: 100;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .nav-links {
        display: flex;
        li {
          margin: 0 1rem;
        }
      }
    }
    .category {
      position: relative;
      background-color: var(--secondary-color);
      padding: 1.6rem 2rem;
      width: 275px;
      cursor: pointer;
      margin-right: 4rem;
      &:hover .category-card {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      span {
        text-transform: capitalize;
        display: flex;
        align-items: center;
        svg {
          font-size: 2rem;
          margin-right: 1rem;
        }
      }
    }
    a {
      color: white;
      text-transform: capitalize;
      transition: color 0.3s linear;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media (min-width: 768px) {
    display: block;
  }
`;
export default Navbar;
