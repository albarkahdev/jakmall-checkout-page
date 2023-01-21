import styled from "styled-components";
import useStoreCheckout from '../../../stores/storeCheckout';

import Space from "../../../ui/Space/Space";
import TextInput from "../../../ui/TextInput/TextInput";

const Wrapper = styled.div`
  grid-area: dropshipperForm;
`;

const DropshipperFormGroup = ({ register }) => {
  const { inputErrors, deliveryDetails } = useStoreCheckout();
  const isDropshipper = deliveryDetails.isDropshipper;

  return (
    <Wrapper>
      <TextInput
        label="Dropshipper name"
        typeInput="text"
        register={register}
        validation={{
          required: {
            value: isDropshipper,
            message: "Name is required",
          },
        }}
        error={inputErrors?.["Dropshipper name"]?.message || ""}
        disabled={!isDropshipper}
      />
      <Space v={10} />
      <TextInput
        label="Dropshipper phone number"
        typeInput="tel"
        register={register}
        validation={{
          required: {
            value: isDropshipper,
            message: "Phone number is required",
          },
          pattern: {
            value: /^[0-9+()-]+$/,
            message: "Phone number may only use 0-9,-,+,(,)."
          },
          minLength: {
            value: 6,
            message: "Min length phone number is 6"
          },
          maxLength: {
            value: 20,
            message: "Max length phone number is 20"
          },
        }}
        error={inputErrors?.["Dropshipper phone number"]?.message || ""}
        disabled={!isDropshipper}
      />
    </Wrapper>
  )
}

export default DropshipperFormGroup;