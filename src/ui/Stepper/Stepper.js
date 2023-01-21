import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";

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

const ChevronRight = styled(FiChevronRight)`
  color: #FF8A00;
`;

const Stepper = ({ list }) => {
  return (
    <Wrapper>
      {
        list?.map((step, idx) => {
          const isLastIndex = list?.length - 1 === idx;
          return (
            <>
              <StepItem
                key={idx}
                isActive={step.isActive}
                numberStep={step.order}
                textStep={step.name}
              />
              {!isLastIndex && <ChevronRight />}
            </>
          );
        })
      }
    </Wrapper>
  )
}

export default Stepper;
