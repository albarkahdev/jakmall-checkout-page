import styled from "styled-components";

const Wrapper = styled.section`
  text-align: start;
`;


const BoxOrderDescription = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxOrderDescription;