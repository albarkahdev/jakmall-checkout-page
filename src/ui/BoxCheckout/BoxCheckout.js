import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  padding-top: 30px;
`;


const ContainerPage = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default ContainerPage;