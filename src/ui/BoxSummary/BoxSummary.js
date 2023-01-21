import styled from 'styled-components';
import Text from '../Text/Text';
import BoxCost from '../BoxCost/BoxCost';
import CostDescription from '../CostDescription/CostDescription';
import Button from '../Button/Button';
import Space from '../Space/Space';

const Wrapper = styled.div`
  border-left: 1px solid #FFE8CC;
  grid-area: boxSummary;
  padding: 0px 20px;
  margin: 20px 0px;
`;

const BoxSummary = ({
  totalItemPurchashed,
  listCost,
  totalCost,
  labelButton
}) => {
  return (
    <Wrapper>
      <Text type="orange-xl">Summary</Text>
        <Space v={5} />
      <Text type="black-medium">{totalItemPurchashed} items purchased</Text>
      <BoxCost>
        {
          listCost?.map((itemCost, idx) => {
            const isLastIndex = listCost?.length - 1 === idx;
            return (
              <>
                <CostDescription
                  key={idx}
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
          isTotal
          label="Total"
          value={totalCost}
        />
        <Space v={18} />
        <Button>{labelButton}</Button>
      </BoxCost>
    </Wrapper>
  )
};

export default BoxSummary;
