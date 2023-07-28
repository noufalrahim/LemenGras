function AccordionBody(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    {props.Title}
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                {props.Title === "Product Details" && <div>
                    <p>StyleCode : {props.StyleCode}</p>
                    <p>Fit : {props.Fit}</p>
                    <p>Brand : {props.Brand}</p>
                    <p>Pattern : {props.Pattern}</p>
                    <p>Color : {props.Color}</p>
                    <p>Material : {props.Material}</p>
                </div>}
                {props.Title === "Product Description" && <div>
                    <p>{props.productDescription}</p>
                </div>}
                </div>
            </div>
        </div>
    )
}
export default AccordionBody;