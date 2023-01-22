import styled from "styled-components";

import { screenSize } from "../../constants/screenSize";

const Wrapper = styled.section`
  position: relative;
  padding-top: 30px;
  top: -20px;
  @media (max-width: ${screenSize.tablet}) {
    padding-top: 100px;
    top: 0px
  }
  @media (max-width: ${screenSize.mobileL}) {
    padding-top: 100px;
    top: 120px
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