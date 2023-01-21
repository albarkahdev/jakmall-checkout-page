import styled from "styled-components";
import DetailsFormGroup from "./DetailsFormGroup";
import DropshipperFormGroup from "./DropshipperFormGroup";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  grid-template-areas: "detailsForm dropshipperForm";
  @media (max-width: 425px) {
    grid-template-columns: auto;
    grid-template-areas: "detailsForm" "dropshipperForm";
  }
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