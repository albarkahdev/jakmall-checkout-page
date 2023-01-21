import styled from 'styled-components';
import { FiCheck } from "react-icons/fi";

const colorBySelect = {
  normal: {
    backgroundColor: "transparent",
    borderColor: "#ddd",
    color: "#999",
  },
  selected: {
    backgroundColor: "rgba(27, 217, 123, 0.1)",
    borderColor: "#1BD97B",
    color: "#1BD97B",
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

const Input = styled.input`
  height: 56px;
  padding: 14px 35px 0 10px;
  outline: 0;
  border: 1px solid ${props => props.borderColor};
  background: ${props => props.backgroundColor};
  font-size: 16px;
  font-weight: 700;
`;

const LabelInput = styled.label`
  font-size: 16px;
  font-weight: 500;
  padding: 0 12px;
  color: #000;
  pointer-events: none;
  position: absolute;
  transform: ${
    props => props.isActive
    ? "translate(0, 12px) scale(0.75)"
    : "translate(0, 26px) scale(1)"};
  transform-origin: top left;
  transition: all 0.2s ease-out;
  ${Wrapper}:focus-within & {
    transform: translate(0, 12px) scale(0.75);
  }
`;

const CheckIcon = styled(FiCheck)`
  color: ${props => props.color};
  position: absolute;
  right: 20px;
  top: 30px;
`;

const RadioBox = ({
    isSelected,
    label,
    value = "",
    onClick,
  }) => {
  const colorBase = isSelected
    ? colorBySelect.selected
    : colorBySelect.normal;

  return (
    <Wrapper onClick={onClick}>
      <Input
        backgroundColor={colorBase.backgroundColor}
        borderColor={colorBase.borderColor}
        value={value}
        disabled
      />
      <LabelInput
        isActive={!!value}
      >{label}</LabelInput>
      {isSelected && <CheckIcon color={colorBase.color} />}
    </Wrapper>
  )
}

export default RadioBox;