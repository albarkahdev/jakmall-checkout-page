import styled from "styled-components";

const Box = styled.section`
  width: 1100px;
  height: 550px;
  left: 50px;
  top: 55px;

  background: #FFFFFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
`;


const BoxCheckout = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  )
};

export default BoxCheckout;