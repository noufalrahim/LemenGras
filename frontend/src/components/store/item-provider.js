import { useState,useEffect } from "react";
import ItemContext from "./Item-context";
import axios from "axios"

function ItemProvider(props) {
    const [itemData, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState() 
    // const [itemData, setItemData] = useState([]);

    const loadedItems = [];
    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get("https://zany-teal-worm-kit.cyclic.app/itemDetails");
            // console.log(response)
            console.log("from card")
            const responseData = await response.data.foundItemsArray;
            // console.log(responseData)
            // console.log(responseData[0].product.id)
            for (const key in responseData){
                loadedItems.push({
                    id: responseData[key]._id,
                    image1: responseData[key].product.image1,
                    image2:responseData[key].product.image2,
                    name: responseData[key].product.name,
                    product: responseData[key].product.product,
                    price: responseData[key].product.price,
                    styleCode: responseData[key].product.styleCode,
                    fit: responseData[key].product.fit,
                    brand: responseData[key].product.brand,
                    pattern: responseData[key].product.pattern,
                    color: responseData[key].product.color,
                    material: responseData[key].product.material,
                    productDescription: responseData[key].product.productDescription,
                    quantity_ordered: responseData[key].product.quantityOrdered,
                    quantity_inStock: responseData[key].product.quantityInStock
                })
            }
            setItems(loadedItems);
            setIsLoading(false)
        }

        fetchItems().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
          });

        
    }, [])

    // useEffect(() => {
    //     axios.get("http://localhost:8080/itemDetails").then(function (response) {
    //         setItemData(response.data.foundItemsArray)
    //         console.log(response.data.foundItemsArray)
    //     }).catch(function (error) {
    //         console.log(error)
    //     })
    // }, [])
    



    return (
        <ItemContext.Provider value={itemData}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemProvider;