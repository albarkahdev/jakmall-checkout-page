import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 70%;
`;

const BoxForm = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxForm;
