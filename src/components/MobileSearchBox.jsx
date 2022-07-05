import styled from 'styled-components';
import SearchBox from './SearchBox';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';

const MobileSearchBox = () => {
  const { isMobileSearchBoxOpen, closeMobileSearchBox } = useAppContext();
  return (
    <MobileSearchBarWrapper className={isMobileSearchBoxOpen ? 'active' : ''}>
      <div className="close-btn">
        <FaTimes onClick={closeMobileSearchBox} />
      </div>
      <div className="search-box-mobile">
        <SearchBox mobile />
      </div>
    </MobileSearchBarWrapper>
  );
};

const MobileSearchBarWrapper = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: var(--light-shadow);
  width: 95%;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  z-index: -100;
  transition: all 0.4s linear;
  &.active {
    opacity: 1;
    visibility: visible;
    z-index: 100;
  }
  .close-btn {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    font-size: 2.4rem;
    color: var(--secondary-color);
    svg {
      cursor: pointer;
      margin-right: 1rem;
      margin-top: 0.5rem;
    }
  }
  .search-box-mobile {
    padding: 0 2rem 2rem 2rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export default MobileSearchBox;
