import React from "react";
const ItemContext = React.createContext({
    id: "",
    image1: "",
    image2: "",
    name: "",
    product: "",
    price: 0,
    styleCode: "",
    fit: "",
    brand: "",
    pattern: ",",
    color: "",
    material: "",
    productDescription: "",
    quantity_ordered: "",
    quantity_inStock: ""
})

export default ItemContext;