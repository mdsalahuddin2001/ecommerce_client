import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <div className="search-input">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>
      <button type="submit">search</button>
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.form`
  display: none;
  justify-content: center;
  flex: 1;
  .search-input {
    position: relative;
    flex: 1;
    max-width: 460px;
  }
  input {
    padding: 1rem 1rem 1rem 4rem;
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
  button {
    border: none;
    padding: 1rem 3rem;
    border: 1px solid var(--primary-color);
    color: white;
    background: var(--primary-color);
    cursor: pointer;
    text-transform: capitalize;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;
export default SearchBox;
