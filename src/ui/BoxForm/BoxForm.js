import styled from 'styled-components';
import { screenSize } from "../../constants/screenSize";

const Wrapper = styled.div`
  grid-area: boxForm;
  @media (max-width: ${screenSize.desktop}) {
    padding: 20px 40px 50px 40px;
  }
  @media (max-width: ${screenSize.laptop}) {
    padding: 20px 20px 30px 20px;
  }
`;

const BoxForm = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default BoxForm;
