import BoxCheckout from "../../../ui/BoxCheckout/BoxCheckout";
import Stepper from "../../../ui/Stepper/Stepper";
import BoxDeliveryDetails from "../../delivery/components/BoxDelivery";

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

const Checkout = () => {
  return (
    <BoxCheckout>
      <Stepper list={listStep} />
      <BoxDeliveryDetails />
    </BoxCheckout>
  )
};

export default Checkout;