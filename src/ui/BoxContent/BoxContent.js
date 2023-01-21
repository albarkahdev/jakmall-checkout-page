import styled from "styled-components";

const Box = styled.section`
  width: 100%;
  min-height: 80vh;
  background: #FFFFFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
`;


const BoxContent = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  )
};

export default BoxContent;