import BoxCheckout from "../../../ui/BoxCheckout/BoxCheckout";
import BoxContent from "../../../ui/BoxContent/BoxContent";
import Stepper from "../../../ui/Stepper/Stepper";
import BoxForm from "../../../ui/BoxForm/BoxForm";
import BoxSummary from "../../../ui/BoxSummary/BoxSummary";
import HeaderForm from "../../../ui/HeaderForm/HeaderForm";
import BoxNavigation from "../../../ui/BoxNavigation/BoxNavigation";
import FormGroup from "./FormGroup";
import BoxFormAndSummary from "../../../ui/BoxFormAndSummary/BoxFormAndSummary";

const listStep = [
  {
    order: 1,
    name: "Delivery",
    isActive: true,
  },
  {
    order: 2,
    name: "Payment",
    isActive: false,
  },
  {
    order: 3,
    name: "Finish",
    isActive: false,
  }
];

const listCost = [
  {
    label: "Cost of goods",
    value: "500,000"
  },
  {
    label: "Dropshipping Fee",
    value: "5,900"
  },
]

const BoxDeliveryDetails = () => {
  return (
    <BoxCheckout>
      <Stepper list={listStep} />
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
    </BoxCheckout>
  )
};

export default BoxDeliveryDetails;