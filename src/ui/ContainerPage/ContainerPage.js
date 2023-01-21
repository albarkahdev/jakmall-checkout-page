import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 100px 50px 0px 50px;
`;


const ContainerPage = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default ContainerPage;