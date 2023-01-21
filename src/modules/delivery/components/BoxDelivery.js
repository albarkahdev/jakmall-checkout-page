import { useRef, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import BoxContent from "../../../ui/BoxContent/BoxContent";
import BoxForm from "../../../ui/BoxForm/BoxForm";
import BoxSummary from "../../../ui/BoxSummary/BoxSummary";
import HeaderForm from "../../../ui/HeaderForm/HeaderForm";
import BoxNavigation from "../../../ui/BoxNavigation/BoxNavigation";
import FormGroup from "./FormGroup";
import BoxFormAndSummary from "../../../ui/BoxFormAndSummary/BoxFormAndSummary";
import { usePrettyPrintedState } from "../../../hooks/usePrettyPrintedState";
import useStoreCheckout from '../../../stores/storeCheckout';

const listCost = [
  {
    label: "Cost of goods",
    value: "500,000"
  },
  {
    label: "Dropshipping Fee",
    value: "5,900"
  },
];

const BoxDelivery = () => {
	const [submitValue, setSubmitValue] = usePrettyPrintedState();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {
    deliveryDetails,
    setInputErrors,
    setDeliveryDetail,
  } = useStoreCheckout();
  const isDropshipper = deliveryDetails.isDropshipper;
  
  useEffect(() => {
    setInputErrors(errors);
  }, [errors]);

  const listCost = useMemo(() => {
    const list = [
      {
        label: "Cost of goods",
        value: "500,000"
      },
    ];

    if (isDropshipper) {
      list.push({
        label: "Dropshipping Fee",
        value: "5,900"
      })
    }

    return list;
  }, [isDropshipper]);

  const totalCost = useMemo(() => {
    let total = 0;

    for(let i = 0; i < listCost.length; i++) {
      let currentCost = listCost[i].value;
      currentCost = currentCost.replace(",", "");
      total += parseInt(currentCost, 10);
    }

    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
  }, [listCost]);

	const onSubmit = (data) => {
		console.log(JSON.stringify(data));
		setSubmitValue(data)
	}
	const formRef = useRef(null)

	const submit = () => {
		if (formRef.current) {
			formRef.current.dispatchEvent(
				new Event('submit', { cancelable: true, bubbles: true })
			)
		}
	};

  const handleCheckboxDropshipper = () => {
    setDeliveryDetail({
      isDropshipper: !isDropshipper,
    });
  };

  return (
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
            isCheckboxChecked={isDropshipper}
            onCheckboxChange={handleCheckboxDropshipper}
          />
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormGroup register={register} />
          </form>
        </BoxForm>
        <BoxSummary
          listCost={listCost}
          totalItemPurchashed={10}
          labelButton="Continue to Payment"
          totalCost={totalCost}
          submit={submit}
        />
      </BoxFormAndSummary>
    </BoxContent>
  )
};

export default BoxDelivery;