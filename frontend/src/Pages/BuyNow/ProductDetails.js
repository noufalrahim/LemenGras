import "./ProductDetails.css"
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../../components/store/Item-context";
import cartContext from "../../components/store/Cart-context";
import Cart from "../../components/Cart/Cart";

function ProductDetails() {
  const itemCtx = useContext(ItemContext);
  const params = useParams();
  const [add, setAdd] = useState("Add")
  let itemArray = {}
  for (const item in itemCtx) {
    if (itemCtx[item].id === params.id) {
      itemArray = itemCtx[item]
    }

  }
  console.log(itemArray)
  // console.log(params.id)
  // //



  // console.log(itemCtx[parseInt(params.id)])
  // //
  const cartCtx = useContext(cartContext)
  // var totalPrice = 0;
  function passDataHandler() {
   
    if (cartCtx.cartItems.length != 0) {
      console.log(cartCtx.cartItems.includes(itemArray))
      console.log(cartCtx.cartItems)
      // console.log(cartCtx.cartItems[0] === itemCtx[parseInt(params.id)])
      if (cartCtx.cartItems.includes(itemArray)) {
        console.log("item present")
        const index = cartCtx.cartItems.indexOf(itemArray)
        cartCtx.cartItems[index].quantity_ordered += 1

      }
      else {
        cartCtx.cartItems.push(itemArray)
        const index = cartCtx.cartItems.indexOf(itemArray)
        cartCtx.cartItems[index].quantity_ordered += 1
      }
      // for (const item of cartCtx.cartItems) {
      //     if (item.id === itemCtx[parseInt(params.id)].id) {
      //         console.log("item present")
      //         item.quantity_ordered += 1
      //         console.log(item.quantity_ordered)
      //         console.log(item)
      //     }
      //     else{
      //         cartCtx.cartItems.push(itemCtx[parseInt(params.id)])
      //     }
      // }
    }
    else {
      cartCtx.cartItems.push(itemArray)
      const index = cartCtx.cartItems.indexOf(itemArray)
      cartCtx.cartItems[index].quantity_ordered += 1
    }

    // cartCtx.totalAmount = totalPrice
    console.log(cartCtx)
    setAdd("Added")
  }
  return (
    <React.Fragment>

      {/* <div className="flex">
                <div className="left-side">
                    <img className="image" src={itemArray.image1} alt="" />
                    <div>
                        <button className="buynow-btn" onClick={passDataHandler}>BUYNOW</button>
                    </div>
                </div>
                <div className="right-side">
                    <div className="item-title">
                        <div>
                            <h2>{itemArray.name}</h2>
                            <h3>{itemArray.product}</h3>
                            <h4>{itemArray.price}</h4>
                            <h5 style={{ color: "grey" }}><i>⭐ 4.5/5 (700 Ratings & 5 Reviews)</i></h5>
                            <hr />
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div> */}
      <Cart />
      <div class="bg-white">
        <div class="pt-6">
          <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img src={itemArray.image1} alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center" />
            </div>
          </div>
          <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{itemArray.name}</h1>
              <h1 class="mt-4 text-xl tracking-tight text-gray-900 sm:text-3xl">{itemArray.product}</h1>
            </div>

            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h3 class="text-sm font-medium text-gray-900">Price</h3>

              <p class="text-3xl tracking-tight text-gray-900">₹{itemArray.price}</p>
                <button onClick={passDataHandler} class={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${add === "Added" ? "bgc" : ""}`}>{add} to bag</button>
            </div>

            <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 class="text-sm font-medium text-gray-900">Description</h3>

                <div class="space-y-6">
                  <p class="mt-4 text-base text-gray-900">{itemArray.productDescription}</p>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Details</h3>
                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400"><span class="text-gray-600">StyleCode: {itemArray.styleCode}</span></li>
                    <li class="text-gray-400"><span class="text-gray-600">Fit: {itemArray.fit}</span></li>
                    <li class="text-gray-400"><span class="text-gray-600">Brand: {itemArray.brand}</span></li>
                    <li class="text-gray-400"><span class="text-gray-600">Pattern: {itemArray.pattern}</span></li>
                    <li class="text-gray-400"><span class="text-gray-600">Color: {itemArray.color}</span></li>
                    <li class="text-gray-400"><span class="text-gray-600">Material: {itemArray.material}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductDetails;