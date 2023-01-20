import styled from "styled-components";

const CircleDarkOrange = styled.div`
  background: #FF8A00;
  box-shadow: 0px 2px 4px rgba(255, 138, 0, 0.3);
  border-radius: 15px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleLightOrange = styled.div`
  background: #FFE5B9;
  border-radius: 15px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleOrange = ({ type = "dark", children }) => {
  return type === "dark"
    ? <CircleDarkOrange>{children}</CircleDarkOrange>
    : <CircleLightOrange>{children}</CircleLightOrange>;
}

export default CircleOrange;
