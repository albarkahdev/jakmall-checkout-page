import styled from 'styled-components';
import Text from '../Text/Text';

const Wrapper = styled.div`
  border-left: 1px solid #FFE8CC;
  grid-area: boxSummary;
  padding: 0px 20px;
  margin: 20px 0px;
`;

const BoxSummary = ({ children }) => {
  return (
    <Wrapper>
      <Text type="black-medium">Test SUmmary</Text>
      <Text type="black-medium">Test SUmmary</Text>
      <Text type="black-medium">Test SUmmary</Text>
      <Text type="black-medium">Test SUmmary</Text>
      <Text type="black-medium">Test SUmmary</Text>
      <Text type="black-medium">Test SUmmary</Text>
      <Text type="black-medium">Test SUmmary</Text>
      {children}
    </Wrapper>
  )
};

export default BoxSummary;
