import cartContext from "./Cart-context"

const cartComponents = ({
    cartItems: [],
    items: [],
    totalAmount: +0
})


function CartProvider(props){
    return (
        <cartContext.Provider value={cartComponents}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider;