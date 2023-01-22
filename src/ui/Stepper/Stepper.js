import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";

import StepItem from "../StepItem/StepItem";
import { screenSize } from "../../constants/commonScreenSize";

const Wrapper = styled.div`
  position: absolute;

  background: #FFFAE6;
  border-radius: 35px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${screenSize.desktop}) {
    left: 33%;
    top: 0px;
    padding: 20px;
  }
  @media (max-width: ${screenSize.laptop}) {
    left: 20%;
    top: 0px;
    padding: 20px;
  }
  @media (max-width: ${screenSize.tablet}) {
    top: 10%;
    left: 20%;
    padding: 10px;
  }
  @media (max-width: ${screenSize.mobileL}) {
    top: 8%;
    left: 3%;
    padding: 0px;
  }
`;

const ChevronRight = styled(FiChevronRight)`
  color: #FF8A00;
`;

const Stepper = ({ list, onChange }) => {
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
                onClick={onChange}
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
