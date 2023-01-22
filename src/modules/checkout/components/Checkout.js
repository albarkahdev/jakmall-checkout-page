import { useMemo } from "react";

import BoxCheckout from "../../../ui/BoxCheckout/BoxCheckout";
import Stepper from "../../../ui/Stepper/Stepper";
import BoxCompleteCheckout from "../../completeCheckout/components/BoxCompleteCheckout";
import BoxDeliveryDetails from "../../delivery/components/BoxDelivery";
import BoxPayment from "../../payment/components/BoxPayment";
import useStoreCheckout from "../../../stores/storeCheckout";

const Checkout = () => {
  const {
    currentStep,
    finishedStep,
    setCurrentStep,
  } = useStoreCheckout();

  const listStep = useMemo(() => {
    return [
      {
        order: 1,
        name: "Delivery",
        isActive: finishedStep.includes(1),
      },
      {
        order: 2,
        name: "Payment",
        isActive: finishedStep.includes(2),
      },
      {
        order: 3,
        name: "Finish",
        isActive: finishedStep.includes(3),
      }
    ];
  }, [finishedStep]);

  const handleChangeStep = order => {
    if (finishedStep.includes(order)) {
      setCurrentStep(order);
    }
  }

  return (
    <BoxCheckout>
      <Stepper list={listStep} onChange={handleChangeStep} />
      {currentStep === 1 && <BoxDeliveryDetails />}
      {currentStep === 2 && <BoxPayment />}
      {currentStep === 3 && <BoxCompleteCheckout />}
    </BoxCheckout>
  )
};

export default Checkout;