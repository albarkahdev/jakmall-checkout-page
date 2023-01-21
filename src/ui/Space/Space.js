import styled from 'styled-components';

const Space = styled.div`
  margin: ${props => props.v ? props.v + "px" : "0px"} ${props => props.h ? props.h + "px" : "2px"};
`;

export default Space;