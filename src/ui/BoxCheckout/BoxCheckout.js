import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  /* width: 100%; */
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