import styled from 'styled-components';
import { FiArrowLeft } from "react-icons/fi";
import Text from '../Text/Text';
import Space from '../Space/Space';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-bottom: 40px; */
  padding: 30px 40px 20px 40px;
  cursor: pointer;
`;

const BoxNavigation = ({ label }) => {
  return (
    <Wrapper>
      <FiArrowLeft color='black' />
      <Space h={4} />
      <Text type='black-large'>{label}</Text>
    </Wrapper>
  )
};

export default BoxNavigation;