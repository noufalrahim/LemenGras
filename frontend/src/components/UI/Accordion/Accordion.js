import ItemContext from "../../store/Item-context";
import AccordionBody from "./AccordionBody";
import { useContext } from "react";
import { useParams } from "react-router-dom";
function Accordion() {
  const itemCtx = useContext(ItemContext);
    const params = useParams();

    let itemArray = {}
    for (const item in itemCtx){
        if(itemCtx[item].id === params.id){
            itemArray = itemCtx[item]
        }
        
    }
    console.log(itemArray)
  return (
    <div className="accordion" id="accordionExample">
      <AccordionBody
        Title={"Product Details"}
        StyleCode={itemArray.styleCode}
        Fit={itemArray.fit}
        Brand={itemArray.brand}
        Pattern={itemArray.pattern}
        Color={itemArray.color}
        Material={itemArray.material}
      />
      <AccordionBody 
        Title = {"Product Description"}
        productDescription = {itemArray.productDescription}
      />
    </div>
  )
}

export default Accordion;