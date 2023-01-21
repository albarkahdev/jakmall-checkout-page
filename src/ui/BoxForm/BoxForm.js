import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px 40px;
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
