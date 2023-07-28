import React from "react";
const cartContext = React.createContext({
    cartItems: [],
    items: [],
    totalAmount: ""

})
export default cartContext;
