import styled from "styled-components";
import { screenSize } from "../../constants/commonScreenSize";

const Wrapper = styled.section`
  width: 100%;
  overflow-y: scroll;
  @media (max-width: ${screenSize.desktop}) {
    padding: 0px 40px;
  }
  @media (max-width: ${screenSize.laptop}) {
    padding: 0px 20px;
  }
  @media (max-width: ${screenSize.tablet}) {
    padding: 0px 10px;
  }
`;


const ContainerPage = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default ContainerPage;