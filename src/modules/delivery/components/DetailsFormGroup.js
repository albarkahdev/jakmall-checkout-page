import styled from "styled-components";
import TextInput from "../../../ui/TextInput/TextInput";
import Space from "../../../ui/Space/Space";

const Wrapper = styled.div`
  grid-area: detailsForm;
`;

const DetailsFormGroup = () => {
  return (
    <Wrapper>
      <TextInput label="Email" typeInput="email" />
      <Space v={10} />
      <TextInput label="Phone number" typeInput="phone" />
      <Space v={10} />
      <TextInput label="Adress" />
    </Wrapper>
  )
}

export default DetailsFormGroup;