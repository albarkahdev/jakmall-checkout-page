import styled from "styled-components";
import TextInput from "../../../ui/TextInput/TextInput";

const Wrapper = styled.div`
  
`;

const PaymentFormGroup = () => {
  return (
    <Wrapper>
      <TextInput label="Dropshipper name" typeInput="text" />
    </Wrapper>
  )
}

export default PaymentFormGroup;