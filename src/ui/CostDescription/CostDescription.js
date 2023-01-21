import styled from 'styled-components';
import Text from '../Text/Text';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: row;
`;

const CostDescription = ({ label, value, type = "normal" }) => {
  switch (type) {
    case "total":
      return (
        <Wrapper>
          <Text type="orange-xl">{label}</Text>
          <Text type="orange-xl-right">{value}</Text>
        </Wrapper>
      );
    case "shipment-provider":
      return (
        <Wrapper>
          <WrapperText>
            <Text type="black-medium-bold">{label}</Text>
            <Text type="black-medium">&nbsp;shipment</Text>
          </WrapperText>
          <Text type="black-medium-bold-right">{value}</Text>
        </Wrapper>
      );
  
    default:
      return (
        <Wrapper>
          <Text type="black-medium">{label}</Text>
          <Text type="black-medium-bold-right">{value}</Text>
        </Wrapper>
      );
  }
};

export default CostDescription;
