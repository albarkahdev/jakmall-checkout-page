import BoxContent from "../../../ui/BoxContent/BoxContent";
import BoxForm from "../../../ui/BoxForm/BoxForm";
import BoxSummary from "../../../ui/BoxSummary/BoxSummary";
import HeaderForm from "../../../ui/HeaderForm/HeaderForm";
import BoxNavigation from "../../../ui/BoxNavigation/BoxNavigation";
import FormGroup from "./FormGroup";
import BoxFormAndSummary from "../../../ui/BoxFormAndSummary/BoxFormAndSummary";

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

const BoxDelivery = () => {
  return (
    <BoxContent>
      <BoxNavigation
        label="Back to cart"
      />
      <BoxFormAndSummary>
        <BoxForm>
          <HeaderForm
            title="Delivery details"
            isChekboxAvailable
            labelCheckbox="Send as dropshipper"
            isCheckboxChecked
          />
          <FormGroup />
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

export default BoxDelivery;