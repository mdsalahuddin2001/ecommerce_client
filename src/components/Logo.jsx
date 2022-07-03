import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoWrapper>
      <a href="/">shop</a>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  a {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: var(--primary-color);
    font-weight: bold;
    padding: 0rem 1rem;
    border: 5px solid var(--primary-color);
  }
  @media (min-width: 768px) {
    a {
      font-size: 2rem;
      padding: 0 2rem;
    }
  }
`;
export default Logo;
