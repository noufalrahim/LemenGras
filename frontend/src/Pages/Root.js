import { Outlet } from "react-router-dom"
import React from "react"
import Navbar from "../components/UI/Navigation Frame/Navbar"
import "./Root.css"
function RootLayout(){
    return (
        <React.Fragment>
            <Navbar/>
            {/* <Cart/> */}
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    )
}
export default RootLayout;