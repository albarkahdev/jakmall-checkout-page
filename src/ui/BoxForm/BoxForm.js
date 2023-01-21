import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 40px 50px 40px;
  grid-area: boxForm;
`;

const BoxForm = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxForm;
