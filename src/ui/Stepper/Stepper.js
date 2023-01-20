import styled from "styled-components";
import StepItem from "../StepItem/StepItem";

const Wrapper = styled.div`
  position: absolute;
  width: 500px;
  height: 70px;
  left: 350px;
  top: 5vh;

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
