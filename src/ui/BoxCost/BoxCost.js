import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
`;

const BoxForm = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxForm;
