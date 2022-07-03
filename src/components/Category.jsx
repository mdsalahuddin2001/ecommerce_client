import styled from 'styled-components';

const Category = ({ className }) => {
  return (
    <CategoryWrapper className={className}>
      <ul>
        <li>category</li>
        <li>category</li>
        <li>category</li>
        <li>category</li>
        <li>category</li>
      </ul>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  position: absolute;
  top: 53px;
  left: 0;
  background-color: white;
  color: var(--text-color);
  padding: 1rem 2rem;
  width: 275px;
  box-shadow: var(--light-shadow);
  visibility: hidden;
  opacity: 0;
  transform: translateY(-100%);
  transition: var(--transition);
  z-index: -1;
  ul {
    display: block;
  }
`;
export default Category;
