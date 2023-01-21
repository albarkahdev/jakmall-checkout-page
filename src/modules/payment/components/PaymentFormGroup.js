import styled from "styled-components";

import RadioBox from "../../../ui/RadioBox/RadioBox";
import useStoreCheckout from '../../../stores/storeCheckout';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
`;

const listPaymentType = [
  {
    label: "e-Wallet",
    value: "1,500,000 left"
  },
  {
    label: "Bank Transfer",
    value: ""
  },
  {
    label: "Virtual Account",
    value: ""
  },
]

const PaymentFormGroup = () => {
  const {
    paymentType,
    setPaymentType,
  } = useStoreCheckout();

  return (
    <Wrapper>
      {
        listPaymentType.map(({ label, value }, idx) => {
          return (
            <RadioBox
              key={idx}
              isSelected={paymentType === label}
              label={label}
              value={value}
              onClick={() => setPaymentType(label)}
            />
          )
        })
      }
    </Wrapper>
  )
}

export default PaymentFormGroup;