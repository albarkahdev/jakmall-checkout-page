import styled from "styled-components";
import StepItem from "../StepItem/StepItem";

const Wrapper = styled.div`
  position: absolute;
  left: 33%;
  top: 0px;
  padding: 20px;

  background: #FFFAE6;
  border-radius: 35px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Stepper = ({ list }) => {
  return (
    <Wrapper>
      {
        list?.map((step, idx) => {
          return <StepItem key={idx} isActive={step.isActive} numberStep={step.order} textStep={step.name} />;
        })
      }
    </Wrapper>
  )
}

export default Stepper;
