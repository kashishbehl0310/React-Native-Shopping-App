const fedx = require("../assets/images/fedex.png");
const dhl = require("../assets/images/dhl.png");
const usps = require("../assets/images/usps.png");

const deliveryOptions = [
  {
    id: "fedex",
    name: "FedEx",
    time: "2-3 days",
    image: fedx
  },
  {
    id: "usps",
    name: "USPS",
    time: "3-4 days",
    image: dhl
  },
  {
    id: "dnl",
    name: "DNL",
    time: "6-7 days",
    image: usps
  }
];

export default deliveryOptions;
