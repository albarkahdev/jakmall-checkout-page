import { useEffect } from "react";

import useStoreCheckout from "../../../stores/storeCheckout";

export const useLoadStoreDeliveryDetails = ({ reset }) => {
  const { getCurrentDeliveryDetails } = useStoreCheckout();

  useEffect(() => {
    let defaultValues = getCurrentDeliveryDetails();
    reset({ ...defaultValues });
  
  }, []);
}