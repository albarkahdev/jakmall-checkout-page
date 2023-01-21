import styled from "styled-components";
import DetailsFormGroup from "./DetailsFormGroup";
import DropshipperFormGroup from "./DropshipperFormGroup";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormGroup = () => {
  return (
    <Wrapper>
      <DetailsFormGroup />
      <DropshipperFormGroup />
    </Wrapper>
  )
}

export default FormGroup;