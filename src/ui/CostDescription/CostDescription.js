import styled from 'styled-components';
import Text from '../Text/Text';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const CostDescription = ({ label, value, isTotal }) => {
  if (isTotal) {
    return (
      <Wrapper>
        <Text type="orange-xl">{label}</Text>
        <Text type="orange-xl-right">{value}</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Text type="black-medium">{label}</Text>
      <Text type="black-medium-bold">{value}</Text>
    </Wrapper>
  )
};

export default CostDescription;
