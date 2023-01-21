import BoxContent from "../../../ui/BoxContent/BoxContent";
import BoxForm from "../../../ui/BoxForm/BoxForm";
import BoxSummary from "../../../ui/BoxSummary/BoxSummary";
import HeaderForm from "../../../ui/HeaderForm/HeaderForm";
import BoxNavigation from "../../../ui/BoxNavigation/BoxNavigation";
import BoxFormAndSummary from "../../../ui/BoxFormAndSummary/BoxFormAndSummary";
import BoxCenter from "../../../ui/BoxCenter/BoxCenter";
import Text from "../../../ui/Text/Text";
import BoxOrderDescription from "./BoxOrderDescription";
import Space from "../../../ui/Space/Space";
import { useListCostAndTotal } from "../../../hooks/useListCostAndTotal";
import useStoreCheckout from "../../../stores/storeCheckout";

const listCost = [
  {
    label: "Cost of goods",
    value: "500,000",
    type: "normal",
  },
  {
    label: "Dropshipping Fee",
    value: "5,900",
    type: "normal",
  },
  {
    label: "GO-SEND",
    value: "15,000",
    type: "shipment-provider",
  },
];

const listAdditionalSummary = [
  {
    label: "Delivery estimation",
    value: "today by GO-SEND",
  },
  {
    label: "Payment method",
    value: "Bank Transfer",
  },
];

const BoxCompleteCheckout = () => {
  const { orderId } = useStoreCheckout();
  const [listCost, totalCost] = useListCostAndTotal();

  return (
    <BoxContent>
      <BoxNavigation
        label=""
      />
      <BoxFormAndSummary>
        <BoxCenter>
          <BoxOrderDescription>
            <HeaderForm
              title="Thank you"
              isChekboxAvailable={false}
            />
            <Text type="black-large">Order ID : {orderId}</Text>
            <Space v={2} />
            <Text type="black-large">Your order will be delivered today with ASDASDASD</Text>
            <BoxNavigation
              label="Go to homepage"
              leftPadding={0}
            />
          </BoxOrderDescription>
        </BoxCenter>
        <BoxSummary
          listCost={listCost}
          listAdditionalSummary={listAdditionalSummary}
          totalItemPurchashed={10}
          totalCost={totalCost}
          labelButton=""
        />
      </BoxFormAndSummary>
    </BoxContent>
  )
};

export default BoxCompleteCheckout;