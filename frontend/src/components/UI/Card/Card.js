import ItemContext from "../../store/Item-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Cart from "../../Cart/Cart";
import "./Card.css"
function Card() {
  const itemCtx = useContext(ItemContext);
  console.log("from card")
  console.log(itemCtx)
  return (
    <React.Fragment>
      <Cart />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl">SHOP WITH US</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {itemCtx.map((item) => (
              <Link to={`/${item["id"]}/productdetails`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src={item["image1"]} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <div className="card-texts">
                  <h1 className="mt-4 text-2xl text-gray-700">{item["name"]}</h1>
                  <h2 className="mt-2 text-sm  text-gray-700">{item["product"]}</h2>
                  <p className="mt-1 text-lg font-medium text-gray-900">₹{item["price"]}</p>
                  <Link to={`/${item["id"]}/productdetails`} ><button className="card-btn hover:bg-white hover:text-black">Buy Now</button></Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>

  )
}
export default Card;