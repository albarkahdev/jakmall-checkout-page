import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
  grid-template-areas: "boxForm boxSummary";
  @media (max-width: 425px) {
    grid-template-columns: auto;
    grid-template-areas: "boxForm" "boxSummary";
  }
`;

const BoxFormAndSummary = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxFormAndSummary;
