import { useContext, useState } from "react";
import "./Cart.css"
import cartContext from "../store/Cart-context";
import { Link } from "react-router-dom";
function Cart(props) {
    let totalPrice = 0
    const cartCtx = useContext(cartContext);
    console.log(cartCtx.cartItems)
    const [render, setRender] = useState(0);
    const itemIncreseHandler = (event, id) => {
        for (const item of cartCtx.cartItems) {
            if (item.id === id) {
                console.log(cartCtx.items)
                console.log(item.quantity_ordered)
                item.quantity_ordered += 1
                setRender(render + 1)
                console.log("item.quantity_ordered" + item.quantity_ordered)
            }
        }
    }

    for (const item of cartCtx.cartItems) {
        if (item.quantity_ordered === 0) {
            const index = cartCtx.cartItems.indexOf(item)
            cartCtx.cartItems.splice(index, 1)
        }

    }

    const itemDecreaseHandler = (event, id) => {
        for (const item of cartCtx.cartItems) {
            if (item.id === id) {
                item.quantity_ordered -= 1
                setRender(render + 1)
                console.log(item.quantity_ordered)

            }
        }

    }

    for (const item of cartCtx.cartItems) {
        totalPrice = totalPrice + item.price * item.quantity_ordered
    }

    cartCtx.totalAmount = totalPrice
    console.log(cartCtx.totalAmount)

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <header className="cart-header">
                <div className="offcanvas-header">
                    <h4 id="offcanvasRightLabel" className="head-text">BAG</h4>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><h4>X</h4></button>
                </div>
            </header>
            <div className="offcanvas-body">
                {cartCtx.cartItems.map((item) => (
                    <div class="mt-3 max-w-sm  w-full lg:max-w-full lg:flex">
                        <div class="h-48 lg:h-auto mn-j lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage:  `url(${item.image1})` }} title="Woman holding a mug">
                        </div>
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8 txt-1">
                                <p class="text-sm text-gray-900 tx1 flex items-center">
                                {item.name}
                                </p>
                                <p class="mt-2 text-sm text-gray-900 tx2 flex items-center">
                                {item.product}
                                </p>
                                <p class="mt-2 text-sm tx3 text-gray-900 flex items-center">
                                ₹{item.price}
                                </p>
                                <div>
                                
                                <button className="quantityChanger" onClick={event => itemIncreseHandler(event, item.id)}>+</button>
                                <button className="quantityChanger" onClick={event => itemDecreaseHandler(event, item.id)}>-</button>
                             
                                </div>
                                <p class="item_quantity mt-3 qb text-gray-900 flex items-center">
                                x{item.quantity_ordered}
                                </p>
                            </div>
                        </div>
                    </div>

                ))}



            </div>
            <footer className="footer-cart">
                <div className="amount"><h6>Total: ₹{totalPrice}</h6></div>
                <div className="buy-btn"><Link className="link" to="/userDetails"><h5>Buy now</h5></Link></div>
            </footer>
        </div>
    )
}
export default Cart;