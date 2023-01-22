import styled from 'styled-components';
import { screenSize } from "../../constants/screenSize";

const Wrapper = styled.div`
  display: grid;
  @media (max-width: ${screenSize.desktop}) {
    grid-template-columns: 70% auto;
    grid-template-areas: "boxForm boxSummary";
  }
  @media (max-width: ${screenSize.tablet}) {
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
