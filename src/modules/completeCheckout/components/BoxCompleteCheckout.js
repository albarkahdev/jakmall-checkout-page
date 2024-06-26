import BoxContent from "../../../ui/BoxContent/BoxContent";
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
import generateDescriptionByShipmentProvider from "../../../utils/generateDescriptionByShipmentProvider";
import { useListAdditionalSummary } from "../../../hooks/useListAdditionalSummary";

const BoxCompleteCheckout = () => {
  const { orderId, shipment, resetStoreCheckout } = useStoreCheckout();
  const [listCost, totalCost] = useListCostAndTotal();
  const [listAdditionalSummary] = useListAdditionalSummary({ isShowAll: true });
  let descriptionShipmentProvider =
    generateDescriptionByShipmentProvider(shipment.provider);
  

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
            <Text type="black-large">Your order will be delivered {descriptionShipmentProvider}</Text>
            <BoxNavigation
              label="Go to homepage"
              leftPadding={0}
              onClick={resetStoreCheckout}
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