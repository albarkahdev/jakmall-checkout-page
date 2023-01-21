import styled from 'styled-components';
import Text from '../Text/Text';

const Wrapper = styled.div`
  display: flex;
  border-left-width: 1px;
  border-left-color: #FF8A00;
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
