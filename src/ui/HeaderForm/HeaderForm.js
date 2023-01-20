import styled from 'styled-components';

import Text from '../Text/Text';
import Checkbox from '../Checkbox/Checkbox';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderForm = ({ title, isChekboxAvailable, labelCheckbox, isCheckboxChecked }) => {
  return (
    <Wrapper>
      <Text type="orange-xxl">{title}</Text>
      {isChekboxAvailable && <Checkbox label={labelCheckbox} checked={isCheckboxChecked} />}
    </Wrapper>
  )
};

export default HeaderForm;
