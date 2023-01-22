import styled from "styled-components";

import RadioBox from "../../../ui/RadioBox/RadioBox";
import useStoreCheckout from '../../../stores/storeCheckout';
import Text from "../../../ui/Text/Text";
import { screenSize } from "../../../constants/screenSize";

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

const listRadioBoxShipment = [
  {
    provider: "GO-SEND",
    costShipement: "15,000"
  },
  {
    provider: "JNE",
    costShipement: "9,000"
  },
  {
    provider: "Personal Courier",
    costShipement: "29,000"
  },
];

const ShipementFormGroup = ({ onChange, error }) => {
  const {
    shipment,
    setShipment,
  } = useStoreCheckout();

  const handleChangeRadio = (label, value) => {
    onChange("shipment");
    setShipment({
      provider: label,
      costShipement: value,
    })
  }

  return (
    <Wrapper>
      {
        listRadioBoxShipment.map(({ provider, costShipement }, idx) => {
          return (
            <RadioBox
              key={idx}
              isSelected={shipment?.provider === provider}
              label={provider}
              value={costShipement}
              onClick={() => handleChangeRadio(provider, costShipement)}
            />
          )
        })
      }
      {error && <Text type="orange-medium">{error}</Text>}
    </Wrapper>
  )
}

export default ShipementFormGroup;