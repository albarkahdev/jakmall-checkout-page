import { useMemo } from "react";

import useStoreCheckout from "../stores/storeCheckout";

export const useListCostAndTotal = () => {
  const {
    deliveryDetails,
    shipment,
  } = useStoreCheckout();
  const isDropshipper = deliveryDetails.isDropshipper;

  const listCost = useMemo(() => {
    const list = [
      {
        label: "Cost of goods",
        value: "500,000",
        type: "normal",
      },
    ];

    if (isDropshipper) {
      list.push({
        label: "Dropshipping Fee",
        value: "5,900",
        type: "normal",
      })
    }

    if (shipment?.provider) {
      list.push({
        label: shipment.provider,
        value: shipment.costShipement,
        type: "shipment-provider",

      })
    }

    return list;
  }, [isDropshipper, shipment]);

  const totalCost = useMemo(() => {
    let total = 0;

    for(let i = 0; i < listCost.length; i++) {
      let currentCost = listCost[i].value;
      currentCost = currentCost.replace(",", "");
      total += parseInt(currentCost, 10);
    }

    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
  }, [listCost]);

  return [listCost, totalCost];
}
