import Text from '../Text/Text';
import Space from '../Space/Space';
import BorderHorizontal from '../BorderHorizontal/BorderHorizontal';

const AdditionalSummaryDescription = ({
  label,
  value,
}) => {
  return (
    <>
      <Space v={20} />
      <BorderHorizontal w="25%" />
      <Space v={20} />
      <Text type="black-large">{label}</Text>
      <Space v={2} />
      <Text type="custom-green">{value}</Text>
    </>
  )
};

export default AdditionalSummaryDescription;
