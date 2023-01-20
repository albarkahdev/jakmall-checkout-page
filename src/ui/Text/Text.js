import styled from "styled-components";

const TextBlackMedium = styled.p`
  color: #575667;
  font-size: 12px;
  font-weight: 500;
`;

const TextBlackLarge = styled.p`
  color: #575667;
  font-size: 14px;
  font-weight: 500;
`;

const TextWhiteMedium = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 500;
`;

const TextOrangeMedium = styled.p`
  color: #FF8A00;
  font-size: 12px;
  font-weight: 500;
`;

const TextOrangeLarge = styled.p`
  color: #FF8A00;
  font-size: 14px;
  font-weight: 500;
`;

const TextOrangeXXL = styled.p`
  color: #FF8A00;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const Text = ({ type = "white-medium", children }) => {
  switch (type) {
    case "black-medium":
      return <TextBlackMedium>{children}</TextBlackMedium>;
    case "black-large":
      return <TextBlackLarge>{children}</TextBlackLarge>;
    case "white-medium":
      return <TextWhiteMedium>{children}</TextWhiteMedium>;
    case "orange-medium":
      return <TextOrangeMedium>{children}</TextOrangeMedium>;
    case "orange-large":
      return <TextOrangeLarge>{children}</TextOrangeLarge>;
    case "orange-xxl":
      return <TextOrangeXXL>{children}</TextOrangeXXL>;
    default:
      return <TextWhiteMedium>{children}</TextWhiteMedium>;
  }
}

export default Text;
