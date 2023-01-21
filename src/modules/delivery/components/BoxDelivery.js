import { useRef, useEffect } from 'react';
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
  const { setInputErrors } = useStoreCheckout();
  
  useEffect(() => {
    setInputErrors(errors);
  }, [errors]);

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
            isCheckboxChecked
          />
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormGroup register={register} />
          </form>
        </BoxForm>
        <BoxSummary
          listCost={listCost}
          totalItemPurchashed={10}
          labelButton="Continue to Payment"
          totalCost="505,900"
          submit={submit}
        />
      </BoxFormAndSummary>
    </BoxContent>
  )
};

export default BoxDelivery;