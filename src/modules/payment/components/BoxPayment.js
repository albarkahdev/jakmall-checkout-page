import { useState } from "react";

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
import { generateOrderId } from "../../../utils/generateRandom";
import { useListAdditionalSummary } from "../../../hooks/useListAdditionalSummary";

const BoxPayment = () => {
  const [errors, setErrors] = useState({
    shipment: "",
    paymentType: "",
  });
  const {
    shipment,
    paymentType,
    setFinishedStep,
    setCurrentStep,
    setOrderId,
  } = useStoreCheckout();
  const [listCost, totalCost] = useListCostAndTotal();
  const [listAdditionalSummary] = useListAdditionalSummary({ isShowAll: false });

  const createAndSetOrderId = () => {
    const orderId = generateOrderId();
    setOrderId(orderId);
  }

  const handleSubmit = () => {
    if (paymentType !== "" && shipment.provider !== "") {
      setFinishedStep([1, 2, 3]);
      setCurrentStep(3);
      createAndSetOrderId()
    } else {
      setErrors({
        paymentType: paymentType === "" ? "Payment Type is required" : "",
        shipment: shipment.provider === "" ? "Shipment is required" : "",
      });
    }
  };

  const handleSelectRadio = (label) => {
    if (label === "shipment" && errors.shipment !== "") {
      setErrors(prev => ({
        paymentType: prev.paymentType,
        shipment: "",
      }));
    }
    if (label === "paymentType" && errors.paymentType !== "") {
      setErrors(prev => ({
        paymentType: "",
        shipment: prev.shipment,
      }));
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  }

  return (
    <BoxContent>
      <BoxNavigation
        label="Back to delivery"
        onClick={handleBack}
      />
      <BoxFormAndSummary>
        <BoxForm>
          <HeaderForm
            title="Shipment"
            isChekboxAvailable={false}
          />
          <ShipementFormGroup onChange={handleSelectRadio} error={errors.shipment} />
          <Space v={20} />
          <HeaderForm
            title="Payment"
            isChekboxAvailable={false}
          />
          <PaymentFormGroup onChange={handleSelectRadio} error={errors.paymentType} />
        </BoxForm>
        <BoxSummary
          listCost={listCost}
          listAdditionalSummary={listAdditionalSummary}
          totalItemPurchashed={10}
          labelButton={`Pay with ${paymentType}`}
          totalCost={totalCost}
          submit={handleSubmit}
        />
      </BoxFormAndSummary>
    </BoxContent>
  )
};

export default BoxPayment;