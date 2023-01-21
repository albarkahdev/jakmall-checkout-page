import BoxCheckout from "../../../ui/BoxCheckout/BoxCheckout";
import Stepper from "../../../ui/Stepper/Stepper";
import BoxForm from "../../../ui/BoxForm/BoxForm";
import BoxSummary from "../../../ui/BoxSummary/BoxSummary";
import HeaderForm from "../../../ui/HeaderForm/HeaderForm";
import BoxNavigation from "../../../ui/BoxNavigation/BoxNavigation";
import FormGroup from "./FormGroup";

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

const BoxDeliveryDetails = () => {
  return (
    <>
      <Stepper list={listStep} />
      <BoxCheckout>
        <BoxForm>
          <BoxNavigation
            label="Back to cart"
          />
          <HeaderForm
            title="Delivery details"
            isChekboxAvailable
            labelCheckbox="Send as dropshipper"
            isCheckboxChecked
          />
          <FormGroup />
        </BoxForm>
        <BoxSummary>

        </BoxSummary>
      </BoxCheckout>
    </>
  )
};

export default BoxDeliveryDetails;