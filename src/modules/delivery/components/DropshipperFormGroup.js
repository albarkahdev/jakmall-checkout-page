import styled from "styled-components";
import Space from "../../../ui/Space/Space";
import TextInput from "../../../ui/TextInput/TextInput";

const Wrapper = styled.div`
  grid-area: dropshipperForm;
`;

const DropshipperFormGroup = ({ register }) => {
  return (
    <Wrapper>
      <TextInput label="Dropshipper name" typeInput="text" register={register} />
      <Space v={10} />
      <TextInput label="Dropshipper phone number" typeInput="tel" register={register} />
    </Wrapper>
  )
}

export default DropshipperFormGroup;