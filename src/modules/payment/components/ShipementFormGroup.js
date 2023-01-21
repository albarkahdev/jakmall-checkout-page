import styled from "styled-components";
import RadioBox from "../../../ui/RadioBox/RadioBox";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
`;

const ShipementFormGroup = () => {
  return (
    <Wrapper>
      <RadioBox
        isSelected
        label="GO-SEND"
        value="15,000"
      />
      <RadioBox
        isSelected={false}
        label="JNE"
        value="9,000"
      />
      <RadioBox
        isSelected={false}
        label="Personal Courier"
        value="29,000"
      />
    </Wrapper>
  )
}

export default ShipementFormGroup;