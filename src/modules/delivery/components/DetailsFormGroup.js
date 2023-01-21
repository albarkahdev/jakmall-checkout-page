import styled from "styled-components";
import useStoreCheckout from '../../../stores/storeCheckout';

import TextInput from "../../../ui/TextInput/TextInput";
import Space from "../../../ui/Space/Space";

const Wrapper = styled.div`
  grid-area: detailsForm;
`;

const DetailsFormGroup = ({ register }) => {
  const { inputErrors } = useStoreCheckout();

  return (
    <Wrapper>
      <TextInput
        label="Email"
        typeInput="email"
        register={register}
        validation={{
          required: "Email is required",
          pattern: {
            value: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i,
            message: "Email is invalid."
          },
        }}
        error={inputErrors?.["Email"]?.message || ""}
      />
      <Space v={10} />
      <TextInput
        label="Phone number"
        typeInput="tel"
        register={register}
        validation={{
          required: "Phone number is required",
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
        error={inputErrors?.["Phone number"]?.message || ""}
      />
      <Space v={10} />
      <TextInput
        label="Adress"
        typeInput="text"
        register={register}
        validation={{
          required: "Address is required",
          maxLength: {
            value: 120,
            message: "Max length address is 120"
          },
        }}
        error={inputErrors?.["Adress"]?.message || ""}
      />
    </Wrapper>
  )
}

export default DetailsFormGroup;