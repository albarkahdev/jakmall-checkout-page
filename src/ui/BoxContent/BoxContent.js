import styled from "styled-components";

const Box = styled.section`
  width: 100%;
  height: 100%;

  background: #FFFFFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;

  display: grid;
  grid-template-columns: 70% auto;
  grid-template-areas: "boxForm boxSummary";
  @media (max-width: 425px) {
    grid-template-columns: auto;
    grid-template-areas: "boxForm" "boxSummary";
  }
`;


const BoxContent = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  )
};

export default BoxContent;