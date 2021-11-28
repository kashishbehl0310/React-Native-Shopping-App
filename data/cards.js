const mastercard = require("../assets/images/mastercard.png");
const visa = require("../assets/images/visa.png");

const cards = [
  {
    id: 1,
    cardNumber: "6789",
    expiry: "02/21",
    name: "Kashish Behl",
    provider: mastercard,
    isDefault: true
  },
  {
    id: 2,
    cardNumber: "4242",
    expiry: "12/24",
    name: "Kashish Behl",
    provider: visa,
    isDefault: false
  }
]

export default cards;