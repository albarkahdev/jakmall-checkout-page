import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  border-left-width: 1px;
  border-left-color: #FF8A00;
`;

const BoxSummary = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxSummary;
