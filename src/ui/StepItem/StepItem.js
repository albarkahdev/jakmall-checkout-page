import styled from "styled-components";

import CircleOrange from "../CircleOrange/CircleOrange";
import Space from "../Space/Space";
import Text from '../Text/Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px 20px;
  cursor: pointer;
`;

const StepItem = ({ isActive, numberStep, textStep }) => {
  if (isActive) {
    return (
      <Wrapper>
        <CircleOrange type="dark">
          <Text type="white-medium">
            {numberStep}
          </Text>
        </CircleOrange>
        <Space h={4} />
        <Text type="orange-large">{textStep}</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <CircleOrange type="light">
        <Text type="orange-medium">
          {numberStep}
        </Text>
      </CircleOrange>
      <Space h={4} />
      <Text type="orange-large">{textStep}</Text>
    </Wrapper>
  )
}

export default StepItem;
