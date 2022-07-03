import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsHeart, BsFillBagFill, BsSearch } from 'react-icons/bs';
const CartIcons = () => {
  return (
    <CartIconsWrapper>
      <div className="search-icon">
        <BsSearch />
        <p>Search</p>
      </div>
      <Link to="/wishlist">
        <div className="icon">
          <span>5</span>
          <BsHeart />
        </div>
        <p>Wishlist</p>
      </Link>
      <Link to="/cart">
        <div className="icon cart">
          <span>8</span>
          <BsFillBagFill />
        </div>
        <p>cart</p>
      </Link>
    </CartIconsWrapper>
  );
};

const CartIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  .search-icon {
    text-align: center;
    cursor: pointer;
    &:hover svg,
    &:hover p {
      color: var(--secondary-color);
    }
    svg {
      font-size: 1.8rem;
    }
    p {
      margin: 0;
      font-size: 1.2rem;
    }
  }
  a {
    display: block;
    text-align: center;
    color: var(--primary-color);
    transition: var(--transition);

    .icon {
      position: relative;
    }

    span {
      position: absolute;
      right: 2px;
      top: -8px;
      height: 1.6rem;
      width: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--secondary-color);
      color: var(--clr-white);
      border-radius: 50%;
      font-size: 0.8rem;
    }

    svg {
      font-size: 1.8rem;
    }
    .icon.cart span {
      right: -6px;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      font-size: 1.2rem;
      transition: var(--transition);
    }
  }
  a:hover,
  a:hover p {
    color: var(--secondary-color);
  }
  @media (min-width: 768px) {
    .search-icon {
      display: none;
    }
    a {
      span {
        height: 2rem;
        width: 2rem;
        font-size: 1rem;
        right: -2px;
        top: -8px;
      }
      .icon.cart span {
        right: -8px;
      }
      svg {
        font-size: 2.4rem;
      }
    }
  }
`;
export default CartIcons;
