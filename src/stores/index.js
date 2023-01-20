import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialValue = {
  current_step: 1,
  total_payment: 0,
  cost_of_goods: 500_000,
  delivery_details: {
    email: "",
    phone: "",
    delivery_address: "",
    is_dropshipper: false,
    dropshipper_name: "",
    dropshipper_phone: "",
  },
  shipment: {
    provider: "",
    cost_shipement: 0,
  },
  payment_type: "",
  order_id: null,
};

const useStoreCheckout = create(
  persist(
    (set) => ({
      currentStep: initialValue.current_step,
      setStep: (v) => set({ current_step: v }),
      
      total_payment: initialValue.total_payment,
      setTotalPayment: (v) => set({ total_payment: v }),
      
      deliveryDetails: initialValue.delivery_details,
      setDeliveryDetail: (v) => set((prevState) =>
        ({ deliveryDetails: {...prevState.delivery_details, ...v } })
      ),
      
      shipment: initialValue.shipment,
      setShipment: (v) => set((prevState) =>
        ({ shipment: {...prevState.shipment, ...v } })
      ),
    
      paymentType: initialValue.payment_type,
      setPaymentType: (v) => set({ payment_type: v }),
    
      orderId: initialValue.order_id,
      setOrderId: (v) => set({ order_id: v }),
    }),
    {
      name: "chekout-storage",
    },
  )
);

export default useStoreCheckout;