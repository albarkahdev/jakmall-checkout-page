import styled from "styled-components";

import RadioBox from "../../../ui/RadioBox/RadioBox";
import useStoreCheckout from "../../../stores/storeCheckout";
import Text from "../../../ui/Text/Text";
import { screenSize } from "../../../constants/commonScreenSize";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
  @media (max-width: ${screenSize.laptop}) {
    grid-template-columns: auto auto;
  }
  @media (max-width: ${screenSize.mobileL}) {
    grid-template-columns: auto;
  }
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

const PaymentFormGroup = ({ onChange, error }) => {
  const {
    paymentType,
    setPaymentType,
  } = useStoreCheckout();

  const handleChangeRadio = (label) => {
    onChange("paymentType");
    setPaymentType(label)
  }

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
              onClick={() => handleChangeRadio(label)}
            />
          )
        })
      }
      {error && <Text type="orange-medium">{error}</Text>}
    </Wrapper>
  )
}

export default PaymentFormGroup;