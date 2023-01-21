import styled from "styled-components";
import RadioBox from "../../../ui/RadioBox/RadioBox";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
`;

const PaymentFormGroup = () => {
  return (
    <Wrapper>
      <RadioBox
        isSelected
        label="e-Wallet"
        value="1,500,000 left"
      />
      <RadioBox
        isSelected={false}
        label="Bank Transfer"
        value=""
      />
      <RadioBox
        isSelected={false}
        label="Virtual Account"
        value=""
      />
    </Wrapper>
  )
}

export default PaymentFormGroup;