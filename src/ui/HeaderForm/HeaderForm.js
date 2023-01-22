import styled from "styled-components";

import Text from "../Text/Text";
import Checkbox from "../Checkbox/Checkbox";
import { screenSize } from "../../constants/commonScreenSize";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  @media (max-width: ${screenSize.laptop}) {
    margin-bottom: 20px;
  }
`;

const HeaderForm = ({
  title,
  isChekboxAvailable,
  labelCheckbox,
  isCheckboxChecked,
  onCheckboxChange = () => null,
}) => {
  return (
    <Wrapper>
      <Text type="orange-xxl">{title}</Text>
      {
        isChekboxAvailable
        && <Checkbox
          label={labelCheckbox}
          checked={isCheckboxChecked}
          onChange={onCheckboxChange}
        />
      }
    </Wrapper>
  )
};

export default HeaderForm;
