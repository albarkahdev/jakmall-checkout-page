import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  padding: 30px 40px;
`;

const BoxForm = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxForm;
