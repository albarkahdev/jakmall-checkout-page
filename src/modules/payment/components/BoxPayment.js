import BoxContent from "../../../ui/BoxContent/BoxContent";
import BoxForm from "../../../ui/BoxForm/BoxForm";
import BoxSummary from "../../../ui/BoxSummary/BoxSummary";
import HeaderForm from "../../../ui/HeaderForm/HeaderForm";
import BoxNavigation from "../../../ui/BoxNavigation/BoxNavigation";
import BoxFormAndSummary from "../../../ui/BoxFormAndSummary/BoxFormAndSummary";
import ShipementFormGroup from "./ShipementFormGroup";
import PaymentFormGroup from "./PaymentFormGroup";
import Space from "../../../ui/Space/Space";

const listCost = [
  {
    label: "Cost of goods",
    value: "500,000"
  },
  {
    label: "Dropshipping Fee",
    value: "5,900"
  },
];

const BoxPayment = () => {
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
          totalItemPurchashed={10}
          labelButton="Continue to Payment"
          totalCost="505,900"
        />
      </BoxFormAndSummary>
    </BoxContent>
  )
};

export default BoxPayment;