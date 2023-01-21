import { useMemo } from 'react';
import styled from 'styled-components';

import { FiCheck, FiX } from "react-icons/fi";
import { useState } from 'react';
import Text from '../Text/Text';

const colorByType = {
  normal: {
    color: "#999",
    borderColor: "#ddd",
  },
  correct: {
    color: "#1BD97B",
    borderColor: "#1BD97B",
  },
  wrong: {
    color: "#FF8A00",
    borderColor: "#FF8A00",

  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 250px; */
  position: relative;
`;

const Input = styled.input`
  /* width: 100%; */
  height: 56px;
  padding: 14px 35px 0 10px;
  outline: 0;
  border: 1px solid ${props => props.borderColor};
  background: #fff;
  font-size: 16px;
`;

const LabelInput = styled.label`
  font-size: 16px;
  padding: 0 12px;
  color: ${props => props.color};
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

const XIcon = styled(FiX)`
  color: ${props => props.color};
  position: absolute;
  right: 20px;
  top: 30px;
`;

const TextInput = ({
    type,
    typeInput,
    label,
    register = () => null,
    validation = {},
    error,
    disabled = false,
  }) => {
  const [isActive, setIsActive] = useState(false);

  const typeTextInput = useMemo(() => {
    if (!isActive) {
      return "normal"
    }

    if (type) {
      return type;
    }

    if (error) {
      return "wrong";
    }

    return "correct";

  }, [isActive, type, error]);

  const handleTextChange = (e) => {
    const text = e?.target?.value;
  
    if (text !== '' && !isActive) {
      setIsActive(true);
    } else if (text === '' && isActive) {
      setIsActive(false);
    }
  }

  const colorBase = colorByType.hasOwnProperty(typeTextInput)
    ? colorByType[typeTextInput]
    : colorByType["normal"];

  return (
    <Wrapper>
      <Input
        borderColor={colorBase.borderColor}
        type={typeInput}
        onChange={handleTextChange}
        {...register(
          label,
          {
            onChange: handleTextChange,
            ...validation,
          }
        )}
        disabled={disabled}
      />
      <LabelInput
        isActive={isActive}
        color={colorBase.color}
      >{label}</LabelInput>
      {typeTextInput === "correct" && <CheckIcon color={colorBase.color} />}
      {typeTextInput === "wrong" && <XIcon color={colorBase.color} />}
      {error && isActive && <Text type="orange-medium">{error}</Text>}
    </Wrapper>
  )
}

export default TextInput;