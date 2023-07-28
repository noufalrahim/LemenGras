import "./Compose.css"
import axios from "axios"
import { useState, useRef } from "react";
import Model from "../../components/UI/Model/Model";
function Compose() {
    // const [idIsValid, setIdIsValid] = useState(true)
    const [sizeS_Available, setSizeS_Available] = useState(true)
    const [sizeM_Available, setSizeM_Available] = useState(true)
    const [sizeL_Available, setSizeL_Available] = useState(true)
    const [sizeXL_Available, setSizeXL_Available] = useState(true)
    const [sizeXXL_Available, setSizeXXL_Available] = useState(true)
    const [sizeXXXL_Available, setSizeXXXL_Available] = useState(true)
    const [isValid, setIsValid] = useState(true)

    // const idInputRef = useRef();
    const image1InputRef = useRef();
    const image2InputRef = useRef();
    const nameInputRef = useRef();
    const productInputRef = useRef()
    const priceInputRef = useRef();
    const styleCodeInputRef = useRef();
    const fitInputRef = useRef();
    const brandInputRef = useRef();
    const patternInputRef = useRef();
    const colorInputRef = useRef();
    const materialInputRef = useRef();
    const productDescriptionInputRef = useRef();
    const quantityInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const sizeS = document.getElementById("sizeS")
        const sizeM = document.getElementById("sizeM")
        const sizeL = document.getElementById("sizeL")
        const sizeXL = document.getElementById("sizeXL")
        const sizeXXL = document.getElementById("sizeXXL")
        const sizeXXXL = document.getElementById("sizeXXXL")

        if (sizeS.checked) {
            setSizeS_Available(true)
        }
        else {
            setSizeS_Available(false)        
        }
        if (sizeM.checked) {
            setSizeM_Available(true)
        }
        else {
            setSizeM_Available(false)        
        }
        if (sizeL.checked) {
            setSizeL_Available(true)
        }
        else {
            setSizeL_Available(false)        
        }
        if (sizeXL.checked) {
            setSizeXL_Available(true)
        }
        else {
            setSizeXL_Available(false)        
        }
        if (sizeXXL.checked) {
            setSizeXXL_Available(true)
        }
        else {
            setSizeXXL_Available(false)        
        }
        if (sizeXXXL.checked) {
            setSizeXXXL_Available(true)
        }
        else {
            setSizeXXXL_Available(false)        
        }

        if(sizeS_Available || sizeM_Available || sizeL_Available || sizeXL_Available || sizeXXL_Available || sizeXXXL_Available){
            const ProductData = {
                // id: idInputRef.current.value,
                image1: image1InputRef.current.value,
                image2: image2InputRef.current.value,
                name: nameInputRef.current.value,
                product: productInputRef.current.value,
                price: priceInputRef.current.value,
                styleCode: styleCodeInputRef.current.value,
                fit: fitInputRef.current.value,
                brand: brandInputRef.current.value,
                pattern: patternInputRef.current.value,
                color: colorInputRef.current.value,
                material: materialInputRef.current.value,
                productDescription: productDescriptionInputRef.current.value,
                quantityInStock: quantityInputRef.current.value,
                quantityOrdered: 0,
                sizeOrdered: "S",
                sizeAvailable: {
                    "S": sizeS_Available,
                    "M": sizeM_Available,
                    "L": sizeL_Available,
                    "XL": sizeXL_Available,
                    "XXL": sizeXXL_Available,
                    "XXXL": sizeXXXL_Available,
                }
    
            }
    
            axios.post("https://zany-teal-worm-kit.cyclic.app/itemDetails", {
                product: ProductData
            })

            const pageClick = document.getElementById("modelbtn");
            pageClick.click()

            // idInputRef.current.value = "";
            image1InputRef.current.value = "";
            image2InputRef.current.value = "";
            nameInputRef.current.value = "";
            productInputRef.current.value = "";
            priceInputRef.current.value = "";
            styleCodeInputRef.current.value = "";
            fitInputRef.current.value = "";
            brandInputRef.current.value = "";
            patternInputRef.current.value = "";
            colorInputRef.current.value = "";
            materialInputRef.current.value = "";
            productDescriptionInputRef.current.value = "";
            quantityInputRef.current.value = "";

        }
        else{
            setIsValid(false)
        }
        



    }


    return (
        <>
            <form className="row g-3" onSubmit={submitHandler}>
                <h4 className="mb-3 titleHead">COMPOSE</h4>
                <div className="col form">
                    <h4 className="mb-3 subHead">PRODUCT DETAILS</h4>
                    {/* <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputId4" ref={idInputRef} placeholder="Id" name="id" required />
                            <label htmlFor="inputId4">ID</label>
                        </div>
                    </div> */}
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputImage14" ref={image1InputRef} placeholder="Image1" name="image1" required />
                            <label htmlFor="inputImage14">Image 1</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputImage24" ref={image2InputRef} placeholder="Image2" name="image2" required />
                            <label htmlFor="inputImage24">Image 2</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputName4" ref={nameInputRef} placeholder="Name" name="name" required />
                            <label htmlFor="inputName4">Name</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputProduct4" ref={productInputRef} placeholder="Product" name="product" required />
                            <label htmlFor="inputProduct4">Product</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="inputPrice4" ref={priceInputRef} placeholder="Price" name="price" required />
                            <label htmlFor="inputPrice4">Price</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputstyleCode4" ref={styleCodeInputRef} placeholder="StyleCode" name="styleCode" required />
                            <label htmlFor="inputstyleCode4">StyleCode</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputFit4" ref={fitInputRef} placeholder="Fit" name="fit" required />
                            <label htmlFor="inputFit4">Fit</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputBrand4" ref={brandInputRef} placeholder="Brand" name="brand" required />
                            <label htmlFor="inputBrand4">Brand</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputPattern4" ref={patternInputRef} placeholder="Pattern" name="pattern" required />
                            <label htmlFor="inputPattern4">Pattern</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputColor4" ref={colorInputRef} placeholder="Color" name="color" required />
                            <label htmlFor="inputColor4">Color</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputMaterial4" ref={materialInputRef} placeholder="Material" name="Material" required />
                            <label htmlFor="inputMaterial4">Material</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputProductDescription4" ref={productDescriptionInputRef} placeholder="ProductDescription" name="ProductDescription" required />
                            <label htmlFor="inputProductDescription4">Product Description</label>
                        </div>
                    </div>
                    <div className="form-comp">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputQuantity4" ref={quantityInputRef} placeholder="Quantity" name="quantity" required />
                            <label htmlFor="inputQuantity4">Quantity (In Stock)</label>
                        </div>
                    </div>
                    <h4 className="mb-3 heading-size">SIZE AVAILABLE</h4>
                    <input type="checkbox" id="sizeS" name="sizeS" value="s"/>
                    <label className="size" for="sizeS">S</label>
                    <input type="checkbox" id="sizeM" name="sizeM" value="m" />
                    <label className="size" for="sizeM">M</label>
                    <input type="checkbox" id="sizeL" name="sizeL" value="l" />
                    <label className="size" for="sizeL">L</label>
                    <input type="checkbox" id="sizeXL" name="sizeXL" value="xl" />
                    <label className="size" for="sizeXL">XL</label>
                    <input type="checkbox" id="sizeXXL" name="sizeXXL" value="xxl" />
                    <label className="size" for="sizeXXL">XXL</label>
                    <input type="checkbox" id="sizeXXXL" name="sizeXXXL" value="xxxl" />
                    <label className="size" for="sizeXXXL">XXXL</label>
                    
                        <p className="card-text"><small className="text-muted"><p className="invalid-text">Please tick atleast one size!</p></small></p>
                    
                </div>
                <div className="col-12 btn-div">
                    <button className="btn btn-dark submit-btn">SUBMIT</button>
                </div>
                <div className="vacant"></div>
                <button type="button" id="modelbtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <Model message = {"Successfully entered data to DB"} title={"Item Entered!"}/>
            </form>

        </>
    )
}
export default Compose;