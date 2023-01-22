import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

import { screenSize } from "../../constants/commonScreenSize";
import Text from "../Text/Text";
import Space from "../Space/Space";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 40px 20px ${props => props.leftPadding + "px"};
  cursor: pointer;
  @media (max-width: ${screenSize.mobileL}) {
    padding: 20px;
    padding-top: 50px;
  }
`;

const BoxNavigation = ({ label, leftPadding = 40, onClick = () => null }) => {
  return (
    <Wrapper leftPadding={leftPadding} onClick={onClick}>
      {label !== "" && <FiArrowLeft color='black' />}
      <Space h={4} />
      <Text type='black-large'>{label}</Text>
    </Wrapper>
  )
};

export default BoxNavigation;