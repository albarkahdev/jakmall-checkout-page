import styled from 'styled-components';

import Text from '../Text/Text';
import BoxCost from '../BoxCost/BoxCost';
import CostDescription from '../CostDescription/CostDescription';
import Button from '../Button/Button';
import Space from '../Space/Space';
import AdditionalSummaryDescription from '../AdditionalSummaryDescription/AdditionalSummaryDescription';
import { screenSize } from "../../constants/commonScreenSize";

const Wrapper = styled.div`
  grid-area: boxSummary;
  @media (max-width: ${screenSize.desktop}) {
    border-left: 1px solid #FFE8CC;
    padding: 0px 20px;
    margin: 20px 0px;
  }
  @media (max-width: ${screenSize.laptop}) {
    border-left: 0px solid white;
    padding: 0px 20px;
    margin: 20px 0px;
  }
`;

const BoxSummary = ({
  totalItemPurchashed,
  listCost,
  listAdditionalSummary,
  totalCost,
  labelButton,
  submit,
}) => {
  return (
    <Wrapper>
      <Text type="orange-xl">Summary</Text>
      <Space v={5} />
      <Text type="black-medium">{totalItemPurchashed} items purchased</Text>
      {
        listAdditionalSummary?.map(({ label, value }, idx) => {
          if (!value) {
            return <></>;
          }
          
          return (
            <AdditionalSummaryDescription
              key={idx}
              label={label}
              value={value}
            />
          )
        })
      }
      <Space v={200} />
      <BoxCost>
        {
          listCost?.map((itemCost, idx) => {
            const isLastIndex = listCost?.length - 1 === idx;
            return (
              <>
                <CostDescription
                  key={idx}
                  type={itemCost.type}
                  label={itemCost.label}
                  value={itemCost.value}
                />
                {!isLastIndex && <Space v={6} />}
              </>
            );
          })
        }
        <Space v={15} />
        <CostDescription
          type="total"
          label="Total"
          value={totalCost}
        />
        <Space v={18} />
        {labelButton !== "" && <Button onClick={submit}>{labelButton}</Button>}
      </BoxCost>
    </Wrapper>
  )
};

export default BoxSummary;
