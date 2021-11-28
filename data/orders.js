import bagItems from "./bagItems";

const orders = [
  {
    id: "12341",
    date: "03/02/2021",
    quantity: 3,
    status: "processing",
    trackingId: "UD5916432",
    amount: 112,
    items: [
      ...bagItems
    ],
    payment: {
      address: `3 Newbridge Court ,Chino Hills, 
      CA 91709, United States`,
      card: "4242",
      delivery: "FedEx",
      deliveryTime: "3",
      deliverCharge: 10,
      discount: "10%",
      coupon: "TRYNEW",
      total: "142"
    }
  },
  {
    id: "00341",
    date: "03/10/2021",
    quantity: 3,
    status: "delivered",
    trackingId: "UD5916412",
    amount: 112,
    items: [
      ...bagItems
    ],
    payment: {
      address: `3 Newbridge Court ,Chino Hills, 
      CA 91709, United States`,
      card: "4242",
      delivery: "FedEx",
      deliveryTime: "3",
      deliverCharge: 10,
      discount: "10%",
      coupon: "TRYNEW",
      total: "142"
    }
  },
  {
    id: "00321",
    date: "13/11/2021",
    quantity: 3,
    status: "cancelled",
    trackingId: "",
    amount: 112,
    items: [
      ...bagItems
    ],
    payment: {
      address: `3 Newbridge Court ,Chino Hills, 
      CA 91709, United States`,
      card: "4242",
      delivery: "FedEx",
      deliveryTime: "3",
      deliverCharge: 10,
      discount: "10%",
      coupon: "TRYNEW",
      total: "142"
    }
  }
]

export default orders;