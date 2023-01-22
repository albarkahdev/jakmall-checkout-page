const generateDescriptionByShipmentProvider = (provider) => {
  switch (provider) {
  case "GO-SEND":
    return "today by GO-SEND"
  case "JNE":
    return "2 days by JNE"
  case "Personal Courier":
    return "1 day by Personal Courier"
  default:
    return "";
  }
};

export default generateDescriptionByShipmentProvider;