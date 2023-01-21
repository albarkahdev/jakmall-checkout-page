import { useMemo } from "react";

import useStoreCheckout from "../stores/storeCheckout";
import generateDescriptionByShipmentProvider from "../utils/generateDescriptionByShipmentProvider";

export const useListAdditionalSummary = ({ isShowAll }) => {
  const {
    shipment,
    paymentType,
  } = useStoreCheckout();

  const listAdditionalSummary = useMemo(() => {
    const list = [];
    let descriptionShipmentProvider =
      generateDescriptionByShipmentProvider(shipment.provider);
    list.push({
      label: "Delivery estimation",
      value: descriptionShipmentProvider,
    });

    if (isShowAll) {
      list.push({
        label: "Payment method",
        value: paymentType,
      });
    }

    return list;
  }, [shipment, isShowAll, paymentType]);

  return [listAdditionalSummary];
}