import BoxContent from "../../../ui/BoxContent/BoxContent";
import BoxForm from "../../../ui/BoxForm/BoxForm";
import BoxSummary from "../../../ui/BoxSummary/BoxSummary";
import HeaderForm from "../../../ui/HeaderForm/HeaderForm";
import BoxNavigation from "../../../ui/BoxNavigation/BoxNavigation";
import BoxFormAndSummary from "../../../ui/BoxFormAndSummary/BoxFormAndSummary";
import ShipementFormGroup from "./ShipementFormGroup";
import PaymentFormGroup from "./PaymentFormGroup";
import Space from "../../../ui/Space/Space";
import useStoreCheckout from '../../../stores/storeCheckout';
import { useListCostAndTotal } from "../../../hooks/useListCostAndTotal";

const listAdditionalSummary = [
  {
    label: "Delivery estimation",
    value: "today by GO-SEND",
  },
];

const BoxPayment = () => {
  const { paymentType } = useStoreCheckout();
  const [listCost, totalCost] = useListCostAndTotal();

  return (
    <BoxContent>
      <BoxNavigation
        label="Back to delivery"
      />
      <BoxFormAndSummary>
        <BoxForm>
          <HeaderForm
            title="Shipment"
            isChekboxAvailable={false}
          />
          <ShipementFormGroup />
          <Space v={50} />
          <HeaderForm
            title="Payment"
            isChekboxAvailable={false}
          />
          <PaymentFormGroup />
        </BoxForm>
        <BoxSummary
          listCost={listCost}
          listAdditionalSummary={listAdditionalSummary}
          totalItemPurchashed={10}
          labelButton={`Pay with ${paymentType}`}
          totalCost={totalCost}
        />
      </BoxFormAndSummary>
    </BoxContent>
  )
};

export default BoxPayment;