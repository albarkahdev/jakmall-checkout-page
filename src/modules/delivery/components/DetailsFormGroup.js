import styled from "styled-components";
import debounce from "lodash.debounce";

import useStoreCheckout from "../../../stores/storeCheckout";
import TextInput from "../../../ui/TextInput/TextInput";
import Space from "../../../ui/Space/Space";

const Wrapper = styled.div`
  grid-area: detailsForm;
`;

const DetailsFormGroup = ({ register }) => {
  const { deliveryDetails, inputErrors, setDeliveryDetail } = useStoreCheckout();
  
  return (
    <Wrapper>
      <TextInput
        inputKey="email"
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
        error={inputErrors?.["email"]?.message || ""}
        onChange={debounce(value => setDeliveryDetail({ email: value }), 200)}
        isNotEmpty={deliveryDetails?.email !== ""}
      />
      <Space v={10} />
      <TextInput
        inputKey="phone"
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
        error={inputErrors?.["phone"]?.message || ""}
        onChange={debounce(value => setDeliveryDetail({ phone: value }), 200)}
        isNotEmpty={deliveryDetails?.phone !== ""}
      />
      <Space v={10} />
      <TextInput
        inputKey="deliveryAddress"
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
        error={inputErrors?.["deliveryAddress"]?.message || ""}
        onChange={debounce(value => setDeliveryDetail({ deliveryAddress: value }), 200)}
        isNotEmpty={deliveryDetails?.deliveryAddress !== ""}
        isMultiline
        rows="3"
        isCounterAvailable
        counterNumber={deliveryDetails?.deliveryAddress?.length}
      />
    </Wrapper>
  )
}

export default DetailsFormGroup;