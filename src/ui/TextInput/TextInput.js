import { useMemo } from "react";
import styled from "styled-components";

import { FiCheck, FiX } from "react-icons/fi";
import { useState } from "react";
import Text from "../Text/Text";

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
  position: relative;
`;

const Input = styled.input`
  height: 56px;
  padding: 14px 35px 0 10px;
  outline: 0;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.disabled ? "#ddd" : "#fff"};
  font-size: 16px;
`;

const Textarea = styled.textarea`
  height: 75px;
  padding: 25px 35px 0 10px;
  outline: 0;
  border: 1px solid ${props => props.borderColor};
  background: #fff;
  font-size: 16px;
  font-family: Helvetica Neue;
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
  inputKey,
  type,
  typeInput,
  label,
  register = () => null,
  onChange = () => null,
  validation = {},
  error,
  disabled = false,
  isNotEmpty,
  isMultiline = false,
  rows = "3",
  isCounterAvailable = false,
  counterNumber = 0,
}) => {
  const [isActive, setIsActive] = useState(isNotEmpty);

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
    onChange(text);
    if (text !== "" && !isActive) {
      setIsActive(true);
    } else if (text === "" && isActive) {
      setIsActive(false);
    }
  }

  // eslint-disable-next-line no-prototype-builtins
  const colorBase = colorByType?.hasOwnProperty(typeTextInput)
    ? colorByType[typeTextInput]
    : colorByType["normal"];

  return (
    <Wrapper>
      {
        isMultiline
          ? (
            <Textarea
              borderColor={colorBase.borderColor}
              type={typeInput}
              {...register(
                inputKey,
                {
                  onChange: handleTextChange,
                  ...validation,
                }
              )}
              disabled={disabled}
              rows={rows}
            />
          )
          : (
            <Input
              borderColor={colorBase.borderColor}
              type={typeInput}
              {...register(
                inputKey,
                {
                  onChange: handleTextChange,
                  ...validation,
                }
              )}
              disabled={disabled}
            />
          )
      }
      <LabelInput
        isActive={isActive}
        color={colorBase.color}
      >{label}</LabelInput>
      {typeTextInput === "correct" && <CheckIcon color={colorBase.color} />}
      {typeTextInput === "wrong" && <XIcon color={colorBase.color} />}
      {error && isActive && <Text type="orange-medium">{error}</Text>}
      {isCounterAvailable && <Text type="black-medium">total character: {counterNumber}</Text>}
    </Wrapper>
  )
}

export default TextInput;