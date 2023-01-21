import styled from 'styled-components';
import Space from '../Space/Space';
import Text from '../Text/Text';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxInput = styled.input`
  padding: 0;
`;

const Checkbox = ({ label, checked }) => {
  return (
    <Wrapper>
      <CheckboxInput type="checkbox" checked={checked} />
      <Space h={4} />
      <Text type="black-large">{label}</Text>
    </Wrapper>
  )
};

export default Checkbox;
