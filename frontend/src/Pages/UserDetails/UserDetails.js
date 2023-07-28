import { useRef, useState, useContext } from "react";
import cartContext from "../../components/store/Cart-context";
import Cart from "../../components/Cart/Cart";
import axios from "axios";
import "./UserDetails.css"
import Model from "../../components/UI/Model/Model";
function UserDetails() {

    const [nameIsValid, setNameIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [address1IsValid, setAddress1IsValid] = useState(true);
    const [address2IsValid, setAddress2IsValid] = useState(true);
    const [localityIsValid, setLocalityIsValid] = useState(true);
    const [stateIsValid, setStateIsValid] = useState(true);
    const [pinCodeIsValid, setPinCodeIsValid] = useState(true);
    const [validSubmit, setValidSubmit] = useState(true)

    const nameInputRef = useRef();
    const emailInputRef = useRef()
    const address1InputRef = useRef();
    const address2InputRef = useRef();
    const localityInputRef = useRef();
    const stateInputRef = useRef();
    const pincodeInputRef = useRef();

    const crtCtx = useContext(cartContext);


    async function submitHandler(event) {
        event.preventDefault();
        const UserDetails = {
            Name: nameInputRef.current.value,
            Email: emailInputRef.current.value,
            Address1: address1InputRef.current.value,
            Address2: address2InputRef.current.value,
            Locality: localityInputRef.current.value,
            State: stateInputRef.current.value,
            PinCode: pincodeInputRef.current.value
        }



        if (UserDetails.Name.trim() === "" || UserDetails.Name.trim().length < 4) {
            setNameIsValid(false);
        }
        else {
            setNameIsValid(true);
        }
        if (UserDetails.Email.trim()  === "" || UserDetails.Email.trim().length < 4) {
            setEmailIsValid(false);
        }
        else {
            setEmailIsValid(true);
        }
        if (UserDetails.Address1.trim()  === "" || UserDetails.Address1.trim().length < 4) {
            setAddress1IsValid(false);
        }
        else {
            setAddress1IsValid(true);
        }
        if (UserDetails.Address2.trim()  === "" || UserDetails.Address2.trim().length < 4) {
            setAddress2IsValid(false);
        }
        else {
            setAddress2IsValid(true);
        }
        if (UserDetails.Locality.trim()  === "" || UserDetails.Locality.trim().length < 4) {
            setLocalityIsValid(false);
        }
        else {
            setLocalityIsValid(true);
        } if (UserDetails.State.trim()  === "" || UserDetails.State.trim().length < 4) {
            setStateIsValid(false);
        }
        else {
            setStateIsValid(true);
        } if (UserDetails.PinCode.trim()  === "" || UserDetails.PinCode.trim().length < 6) {
            setPinCodeIsValid(false);
        }
        else {
            setPinCodeIsValid(true);
        }


        if(nameIsValid && nameInputRef.trim !== "" && 
        emailIsValid && emailInputRef.trim !== "" &&
        address1IsValid && address1InputRef.trim !== "" &&
        address2IsValid && address2IsValid.trim !== "" &&
        localityIsValid && localityInputRef.trim !== "" &&
        stateIsValid && stateInputRef.trim !== "" &&
        pinCodeIsValid && pincodeInputRef.trim !== ""){
            console.log(crtCtx.totalAmount)
            console.log(UserDetails)
    
            // 
            const loadScript = (src) => {
                return new Promise((resolve) => {
                    const script = document.createElement("script")
                    script.src = src
    
                    script.onload = () => {
                        resolve(true)
                    }
    
                    script.onerror = () => {
                        resolve(false)
                    }
    
                    document.body.appendChild(script)
                })
            }
    
            const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    
            if (!res) {
                alert("You are offline... Failed to load Razorpay SDK")
                return
            }
    
            const options = {
                key: "rzp_test_8ZDwkElu5zWD8p",
                currency: "INR",
                amount: crtCtx.totalAmount * 100,
                name: "LEMEN GRAS",
                description: "Thanks for purchasing",
                // image: "https://pizzapalace.my.canva.site/images/8d06a32830d8f489a80b2aa38222384f.svg",
                handler: function (response) {
                    axios.post("https://zany-teal-worm-kit.cyclic.app/orderDetails", {
                        data: UserDetails,
                        price: crtCtx.totalAmount,
                        items: crtCtx.cartItems

                    })
                    const btnClick = document.getElementById("modelbtn");
                    btnClick.click();
                },
                theme: {
                    "color": "#000"
                }
            }
    
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()

            

        }
        else{
            setValidSubmit(false)
        }



        // 


    }


    return (
        <form className="row g-3" onSubmit={submitHandler}>
            <h4 className="mb-3 b-009">BILLING DETAILS</h4>
            <div className="col-md-6">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputName4" placeholder="name" ref={nameInputRef} name="Name" value={UserDetails.Name} />

                    <label htmlFor="inputName4">Name</label>
                    {!nameIsValid && <div className="invalid">
                        <p className="card-text"><small className="text-muted"><p className="invalid-text">Please enter a valid name!</p></small></p>
                    </div>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="inputEmail4" placeholder="name@example.com" ref={emailInputRef} name="email" value={UserDetails.Email} />
                    <label htmlFor="inputEmail4">Email</label>
                    {!emailIsValid && <div className="invalid">
                        <p className="card-text"><small className="text-muted"><p className="invalid-text">Please enter a valid email!</p></small></p>
                    </div>}

                </div>
            </div>

            <div className="col-12">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main Street" ref={address1InputRef} name="address1" value={UserDetails.Address1} />
                    <label htmlFor="inputAddress">Address (Area and Street)</label>
                    {!address1IsValid && <div className="invalid">
                        <p className="card-text"><small className="text-muted"><p className="invalid-text">Please enter a valid address!</p></small></p>
                    </div>}
                </div>
            </div>
            <div className="col-12">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputAddress2" placeholder="City/District/Town" ref={address2InputRef} name="address2" value={UserDetails.Address2} />
                    <label htmlFor="inputAddress2">City/District/Town</label>
                    {!address2IsValid && <div className="invalid">
                        <p className="card-text"><small className="text-muted"><p className="invalid-text">Please enter a address!</p></small></p>
                    </div>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputLocality" placeholder="Locality" ref={localityInputRef} name="locality" value={UserDetails.Locality} />
                    <label htmlFor="inputLocality">Locality</label>
                    {!localityIsValid && <div className="invalid">
                        <p className="card-text"><small className="text-muted"><p className="invalid-text">Please enter a valid locality address!</p></small></p>
                    </div>}
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-floating mb-3">
                    <select style={{backgroundColor: "#D9D9D9"}} id="inputState" className="form-select" ref={stateInputRef} name="state" value={UserDetails.State} required>
                        <option selected>Kerala</option>
                    </select>
                    <label htmlFor="inputState">State</label>
                    <p className="card-text"><small className="text-muted"><p className="invalid-text itr">Currently we accept orders only from Kerala</p></small></p>
                    {!stateIsValid && <div className="invalid">
                        <p className="card-text"><small className="text-muted"><p className="invalid-text">Please enter a valid state name!</p></small></p>
                    </div>}
                </div>
                <Cart />
            </div>
            <div className="col-md-2">
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="inputPinCode" placeholder="PinCode" ref={pincodeInputRef} name="pincode" value={UserDetails.PinCode} />
                    <label htmlFor="inputPinCode">Pin Code</label>
                    {!pinCodeIsValid && <div className="invalid">
                        <p className="card-text"><small className="text-muted"><p className="invalid-text">Please enter a valid pin code!</p></small></p>
                    </div>}
                </div>
            </div>
            <div className="col-12">
            </div>
            <div className="col-12">
                <button className="btn btn-primary">Save</button>
            </div>
            <button type="button" id="modelbtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
            </button>
                <Model message = {"Successfully placed your order. Thankyou for shopping with us!"} title={"Order Placed!"}/>

        </form>

    )
}

export default UserDetails;