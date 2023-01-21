import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialValue = {
  currentStep: 1,
  finishedStep: [1],
  totalPayment: 0,
  costOfGoods: 500_000,
  deliveryDetails: {
    email: "",
    phone: "",
    deliveryAddress: "",
    isDropshipper: false,
    dropshipperName: "",
    dropshipperPhone: "",
  },
  shipment: {
    provider: "",
    costShipement: 0,
  },
  paymentType: "",
  orderId: null,
  inputErrors: {},
};

const useStoreCheckout = create(
  
    (set) => ({
      currentStep: initialValue.currentStep,
      setCurrentStep: (v) => set({ currentStep: v }),

      finishedStep: initialValue.finishedStep,
      setFinishedStep: (v) => set({ finishedStep: v }),
      
      totalPayment: initialValue.totalPayment,
      setTotalPayment: (v) => set({ totalPayment: v }),
      
      deliveryDetails: initialValue.deliveryDetails,
      setDeliveryDetail: (v) => set((prevState) =>
        ({ deliveryDetails: {...prevState.deliveryDetails, ...v } })
      ),
      
      shipment: initialValue.shipment,
      setShipment: (v) => set((prevState) =>
        ({ shipment: {...prevState.shipment, ...v } })
      ),
    
      paymentType: initialValue.paymentType,
      setPaymentType: (v) => set({ paymentType: v }),
    
      orderId: initialValue.orderId,
      setOrderId: (v) => set({ orderId: v }),
      
      inputErrors: initialValue.inputErrors,
      setInputErrors: (v) => set({ inputErrors: v }),
    })
);

export default useStoreCheckout;