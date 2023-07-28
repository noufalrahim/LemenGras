import "./HomePage.css"
import React from "react";
function Homepage(){
    return(
        <React.Fragment>
        <div className="main p-1">
        <div>
        <img className="image" src="https://pizzapalace.my.canva.site/shirt/images/7d43a9163163e8c3ccd3a34a6cba7c02.png"/>
        
        </div>
        <div className="title">
            <h1 className="text">LEMEN GRAS</h1>
        <h3 className="subscript"><i>For Gents & Boys</i></h3>
        </div>
        </div>
        <div className="p-2">
        <img className="img-2" src="https://pizzapalace.my.canva.site/shirt/images/4e0b469d42b65e2c4dd19bf03eb58a43.png"/>
        {/* <div className="square">
        </div> */}
        </div>
        </React.Fragment>
    )
}
export default Homepage;