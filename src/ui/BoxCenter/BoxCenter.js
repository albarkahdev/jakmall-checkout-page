import styled from "styled-components";

const Wrapper = styled.section`
  padding: 20px 40px 50px 40px;
  grid-area: boxForm;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const BoxCenter = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxCenter;