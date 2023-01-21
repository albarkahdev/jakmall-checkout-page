import styled from "styled-components";

const TextBlackMedium = styled.p`
  color: #575667;
  font-size: 12px;
  font-weight: 500;
`;

const TextBlackMediumBold = styled.p`
  color: #575667;
  font-size: 12px;
  font-weight: bold;
`;

const TextBlackMediumBoldRight = styled.p`
  color: #575667;
  font-size: 12px;
  font-weight: bold;
  text-align: end;
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

const TextOrangeXL = styled.p`
  color: #FF8A00;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const TextOrangeXLRight = styled.p`
  color: #FF8A00;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: end;
`;

const TextOrangeXXL = styled.p`
  color: #FF8A00;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const TextCustomGreen = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #1BD97B;
`;

const Text = ({ type = "white-medium", children }) => {
  switch (type) {
    case "black-medium":
      return <TextBlackMedium>{children}</TextBlackMedium>;
    case "black-medium-bold":
      return <TextBlackMediumBold>{children}</TextBlackMediumBold>;
    case "black-medium-bold-right":
      return <TextBlackMediumBoldRight>{children}</TextBlackMediumBoldRight>;
    case "black-large":
      return <TextBlackLarge>{children}</TextBlackLarge>;
    case "white-medium":
      return <TextWhiteMedium>{children}</TextWhiteMedium>;
    case "orange-medium":
      return <TextOrangeMedium>{children}</TextOrangeMedium>;
    case "orange-large":
      return <TextOrangeLarge>{children}</TextOrangeLarge>;
    case "orange-xl":
      return <TextOrangeXL>{children}</TextOrangeXL>;
    case "orange-xl-right":
      return <TextOrangeXLRight>{children}</TextOrangeXLRight>;
    case "orange-xxl":
      return <TextOrangeXXL>{children}</TextOrangeXXL>;
    case "custom-green":
      return <TextCustomGreen>{children}</TextCustomGreen>;
    default:
      return <TextWhiteMedium>{children}</TextWhiteMedium>;
  }
}

export default Text;
