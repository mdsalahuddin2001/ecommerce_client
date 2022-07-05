import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
const SearchBox = ({ mobile }) => {
  return (
    <SearchBoxWrapper mobile={mobile}>
      <div className="search-input">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>
      <button className="search-btn" type="submit">
        search
      </button>
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.form`
  display: ${({ mobile }) => (mobile ? 'block' : 'none')};
  justify-content: center;
  flex: 1;
  .search-input {
    position: relative;
    flex: 1;
    max-width: 460px;
  }
  input {
    padding: ${({ mobile }) =>
      mobile ? ' .8rem .8rem .8rem 4rem' : ' 1rem 1rem 1rem 4rem'};
    width: 100%;
    border-radius: 0;
    border: 1px solid var(--primary-color);
  }
  svg {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    font-size: 1.6rem;
  }
  .search-btn {
    border: none;
    padding: ${({ mobile }) => (mobile ? '.8rem 2.4rem' : '1rem 3rem')};
    border: 1px solid var(--primary-color);
    color: white;
    background: var(--primary-color);
    cursor: pointer;
    text-transform: capitalize;
    font-weight: bold;
    margin-top: ${({ mobile }) => (mobile ? '1rem' : '0')};
  }
  @media (min-width: 768px) {
    display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
  }
`;
export default SearchBox;
